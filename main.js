import { iconButton } from "./src/iconButton.js";
import { icon } from "./src/icon.js";
import { textButton } from "./src/textButton.js";

document.body.append(iconButton({onclick: ()=>alert("You clicked!"), url: './circle.svg'}));

document.body.append(textButton({onclick: ()=>alert("You clicked!"), extraClasses: "textButton-secondary"}, "Text button"));

