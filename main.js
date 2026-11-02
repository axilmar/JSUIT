import { createHTMLElement } from "./src/HTMLElement.js";

document.body.append(createHTMLElement("button", {tooltip: "Yo!"}, "Click me"));
