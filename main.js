import { createHTMLElement } from "./src/HTMLElement.js";

document.body.append(createHTMLElement("button", {tooltip: "Yo!", onmount: () => console.log("mounted")}, "Click me"));
