const colorToggle = document.getElementById("colorTheme");
const body = document.getElementById("body");

colorToggle.onclick = function switchTheme() {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
  } else {
    body.classList.replace("dark", "light");
  }
};
