const container = document.querySelector("#container");

const paragraph = document.createElement("p");

paragraph.classList.add("red-text");
paragraph.textContent = "Hey, I'm Red";
container.appendChild(paragraph);

const littleHeader = document.createElement("h3");

littleHeader.textContent ="I'm a blue h3!";

container.appendChild(littleHeader);

const content = document.createElement("div");
content.classList.add("content");

container.appendChild(content);

const par = document.createElement("p");

const header = document.createElement("h1");

header.textContent = "I'm in a div";
par.textContent = "ME TOO!";
content.appendChild(header);
content.appendChild(par);



