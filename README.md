![header](https://github.com/LouisCoutel/Calculator/blob/main/CalcPreview.jpg)
## About
On the surface, this is a simple browser calculator. It handles chained operations, floating points, erasing and common errors. Under the hood, it is more of an exercise-turned-experiment in Object Oriented Programming.

This project started as an assignment from **The Odin Project**'s Foundations Course. My main goals when I first tackled the assignment were:
- to design it in **Figma**, in accordance with the theme I designed for my portfolio and resume.
- to come up with a solution of my own for the various requirements of the project.

On the design front, the main challenge was keeping my grid layout responsive without distorting the square buttons or the shape of the calculator. I settled on a mobile first approach and a fairly small max-width.
Regarding the logic, I devised a solution using arrays of strings for operators and numbers. Counters were employed to pair operators and terms appropriately.


### Object Oriented Programming
> Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects, combining data and methods that operate on that data. It emphasizes modularity, reusability, and maintainability.

When I was introduced to *Object Oriented Programming* and various features from **ECMAScript 6** and subsequent versions, I decided to come back to the project with an object-oriented approach.
My goal was to familiarize myself with core OOP concepts and best practices, especially in Javascript.


### Model View Controller
> Model-View-Controller (MVC) is a software architectural pattern that separates an application into three interconnected components: the Model (data), the View (user interface), and the Controller (user input handling). 

After being introduced to JS *frameworks* through **Vue3**, I became interested in common architecture patterns such as the *Model View Controller* and *Model View View-Model* patterns. I was also curious about events handling, components and DOM manipulation. I revisited the project to implement the MVC pattern, aiming to understand its core concepts and compare it with MVVM and reactive frameworks.


### MVC implementation
Here is the approach I settled on :
- the model would store, modify and expose data, but also of handle computation. 
- the view would render data in the DOM and set event handlers
- the controller would respond to user inputs and instructs the view and model, but would not perform any business logic

I wanted to avoid the *Anemic Model* anti-pattern, and in my opinion giving the controller responsability of business logic would have resulted in exactly that. It also seemed to me that using a "business layer" would not have resulted in meaningfull separation of concerns, as the class in question would effectively act as an extension of either the controller or model.

> The "anemic model" anti-pattern involves organizing a system where the data model lacks behavior and primarily consists of passive data structures. In this pattern, business logic is often placed outside the model, leading to anemic domain objects with limited capabilities.


## App structure breakdown
The app consists of a Model, a View and a Controller instanciated through *Singleton Factories* that expose a `getInstance()` method and replace their constructor with a function returning the current instance for further "foolproofing".

> A Singleton Factory is a design pattern that ensures a class has only one instance and provides a global point of access to it. It combines the principles of the Singleton pattern, which restricts the instantiation of a class to a single instance, with a factory method, which is responsible for creating objects.


### The view
The view is comprised of two properties, *buttons* and *display*, and its only method is `render()`. It instantiates **Buttons** and **Display** on app launch, when instructed to by the controller. This is not ideal, as I would have prefered to instantiate them directly in the constructor, but as the buttons need to refer to the controller for events handling, it has to be fully instanciated first.


#### view.buttons
The class **Buttons** mirrors the various **HTML button elements** present in the document, by instanciating the appropriate **Button** sub-class for each type of button: **digitButton**, **operatorButton** and "features" such as **clrButton** or **BackspaceButton**. Each Button contains all of the appropriate properties, such as a symbol, a reference to an HTML element and a value, and sets an event handler on their element. When clicked, each button calls a specific controller method with appropriate parameters.


#### view.display
In the same spirit as the Buttons class, the Display mirrors the HTML elements where input and result data are displayed and exposes setters.


### The model
The model contains four properties: 
- terms: an array of class instances
- operators: also an array of class instances
- result: a single value, either undefined or a number
- displayData: a representation of current input data in a way that can be easily passed down to the view and rendered.

It exposes methods to set, retrieve, modify and perform operations with/on that data, such as ``compute()`` or ``setDisplayData()``.


#### model.terms & model.operators
These properties are instances of (respectively) the **TermsArray** and **OperatorsArray** classes, which themselves extend the **DataArray** class. They contain a **data** property and offer methods for setting, getting and modifying data. Model.terms.data stores instances of **Term**, while model.operators.data stores instances of **Operator**.


#### Term
Each Term stores its value as a floating point integer as well as an array of integers, in order to easily add or remove digits through array methods. It exposes various setters, getters and helpers, handles setting and removing floating points and actualizes its value property when modified.


#### Operator
Each operator is a sub-class of **Operator**, such as **Plus** or **Divider**, storing its sign as a string and exposing an *operate* method that returns the result of the corresponding operation when provided with two terms.


### The controller
The controller only properties store instances of **Model** and **View**. Most of its methods correspond to specific user inputs : setting an operator, setting a digit, erasing the last inputed digit or operator... Conditions are implemented to manage user input and enhance the user experience.

For example, it's not possible to set an operator before any digit as been inputed, to divide by zero, or to set more than one floating point in a term. On the other hand, if the first input is a floating point, "0." will be displayed, even tho this is a null value. Once a computation as been performed, it's possible to set new operators or terms in order to perform a new computation with the result of the previous one.


## Computation logic
When instructed to compute, the model clones its operators and terms arrays, in order to preserve input data. It then triggers a *while loop* that runs the following sequence of actions:
- get the index of the first multiplier operator
- if there is none, get the index of the first divider
- if there is none, set index at 0
- instruct the operator stored at this index to operate, with the values of terms[index] and terms[index + 1] provided as parameters
- return the result 
- if this means trying to divide by 0, an exception is thrown that triggers a reset.
- replace terms[index] by the result
- remove terms[index + 1]

When there is no more operators left, the loop ends and the only remaining term's value is in model.result.


## Typescript and Continuous Integration/Continuous Deployment
After being advised to dedicate some time to issues of integration, deployment and code quality in order to improve my full-stack profile I turned to this project once again, considering that its small scale would allow me to quickly explore these concepts by integrating tools such as **Typescript** and **Jest**, as well as **Github Actions** and **Workflows**.

This project's repository is integrated into my portfolio as a **Git subtree**. 

> Git Subtrees allows a repository to include the contents of another repository as a subdirectory. This enables the integration of external projects into a main project while maintaining their separate version histories.

Typescript compilation and deployment to **Github Pages** is handled at the parent-repo level with **Vite** (a build tool for front-end Javascript environments). Workflows for automated testing are implemented on both repos, since subtrees result in separate histories.

GitHub Pages is one of the most convenient ways to quickly deploy an app for free, but it only allows deployment of a single repository. Including all my projects on my Page would have required to integrate them in my portfolio. Instead, working with subtrees allowed me to keep every project completly independent while still bundling everything under a shared parent repo, with a single common building and deployment step.
