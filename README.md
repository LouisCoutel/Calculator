# Calculator

## About
On the surface, a simple browser calculator. Handles chained operations, floating points, erasing and common errors. Under the hood, an exercise-turned-experiment in Object Oriented Programming.

## Project: Calculator
This project started as an assignment from **The Odin Project**'s Foundations Course. My main goals when I first tackled the assignment were :
- to design it in **Figma**, in accordance with the theme I'd settled on for my portfolio and resume.
- to come up with a solution of my own for the various requirements of the project.

On the design front, everything came together pretty nicely. As for the logic I came up with  a convoluted-but-serviceable solution that would use arrays of strings for operators and numbers, alongside counters in order to pair operators and terms appropriately. Satisfied with the project, I moved on.

## OOP
As I was introduced to *Object Oriented Programming* and various features from **ECMAScript 6** and subsequent versions, I decided to come back to the project with an OOP approach. My goals were : 
- to take advantage of the **Class** syntactic sugar to reduce redundency, improve code quality, manage operations and DOM manipulation through Class methods
- better familiarize myself with core OOP concepts and best-practices

During the course of several iterations, I improved separation of concerns and came to a better understanding of the fundamentals of OOP.

## MVC
After being introduced to JS *frameworks* through **Vue3**, I became interested in common architecture patterns such as the *Model View Controller* and *Model View View-Model* patterns. I was also curious about events handling, components and DOM manipulation. I decided to return to this project and implement the MVC pattern in order to better understand its core concepts and compare it with MVVM and reactive frameworks.

At the same time, I furthered my OPP approach so that every meaningfull part of the app would be an instance of a class.

After several iterations, I settled on the following :
- the model is in charge of storing, modifying and exposing data, but also handles "business logic", in this case computation. 
- the view renders data in the DOM and sets event handlers
- the controller responds to events and instructs the view and model, but doesn't perform any business logic

I wanted to avoid the *Anemic Model* anti-pattern, and in my opinion giving the controller responsability of business logic would have resulted in exactly that. It also seemed to me that using a "business layer" would not have resulted in meaningfull separation of concerns, as the class in question would effectively act as an extension of either the controller or model.

In the end, I decided to give this responsibility to the model, as computing depends on model data and ends up modifying it.

### The app
The app consist in a Model, a View and a Controller instanciated through *Singleton Factories* that expose a `getInstance()` method and replace their constructor with a function returning the current instance for further *foolproofing*.

This allowed me to instantiate the controller with the view and model as part of its constructor without having to worry about refering to un-instantiated classes, importing instances, passing instances as parameters or re-instantiating classes that should only have one instance.

### The view
The view is comprised of two properties, *buttons* and *display*, and its only method is `render()`.

The view itself instantiates **Buttons** and **Display** on app launch, when instructed to by the controller. This is not ideal, as I would have prefered to instantiate them directly in the constructor, but as the buttons need to refer to the controller for events handling, the controller has to be fully instanciated first.

#### view.buttons
The class **Buttons** mirrors the various **HTML button elements** present in the document, by instanciating the appropriate sub-class for each type of button: digits, operators and "features" such as *clear* or *erase*. Each button contains all the appropriate properties, such as their symbol, HTML element and value, and sets an event handler on their element.

When clicked, each button calls a specific controller method with appropriate parameters, so that the controller instructs the view and/or the model accordingly.

#### view.display
In the same spirit as the Buttons class, the display mirrors the HTML elements where input and result data are displayed and exposes setters.

### The model
The model contains four properties: 

- terms: an array of class instances
- operators: also an array of class instances
- result: a single value, either undefined or a number
- displayData: a representation of current input data in a way that can be easily passed down to the view and rendered.

#### model.terms & model.operators
These properties are instances of (respectively) the **TermsArray** and **OperatorsArray** classes, which themselves extend the **DataArray** class. They contain a **data** property and offer methods for setting, getting and modifying data.

Model.terms.data stores instances of **Term**, while model.operators.data stores instances of **Operator**.


#### Term
Each Term stores its value as a floating point integer as well as an array of integers, in order to easily add or remove digits through array methods. It exposes various setters, getters and helpers, handles setting and removing floating points and actualizes its value property when modified.

#### Operator

Each operator is a sub-class of **Operator**, such as **Plus** or **Divider**, containing its sign as a string and exposing an *operate* method that returns the result of the corresponding basic operation when provided with two terms.

### The controller
The controller only properties are instances of **Model** and **View**. Its job is to respond to events and exceptions, instruct the model accordingly and pass data from the model to the view.

Most of its methods correspond to specific user inputs : setting an operator, setting a digit, erasing the last inputed digit or operator, setting the result, chaining operations after a computation, reseting... 

