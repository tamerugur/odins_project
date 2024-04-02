const container = document.querySelector("#container");
const calculator = document.createElement("div");
const buttons = document.createElement("div");
const numbers = document.createElement("div");
const operations = document.createElement("div");
const displayScreen = document.createElement("div");
const text = document.createElement("div");

displayScreen.classList.add("displayScreen");
text.classList.add("text");
calculator.classList.add("calculator");
operations.classList.add("button");
numbers.classList.add("button");

buttons.classList.add("buttons");
operations.classList.add("operations");
numbers.classList.add("numbers");

text.textContent = "0";
for(let i = 0; i < 19; i++){

}


container.appendChild(calculator);
calculator.appendChild(displayScreen);
calculator.appendChild(buttons);
displayScreen.appendChild(text);