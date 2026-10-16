import { iconButton } from "./src/iconButton.js";
import { icon } from "./src/icon.js";

document.body.append(iconButton({onclick: ()=>alert("You clicked!"), url: './circle.svg'}));

