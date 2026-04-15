import { initHTMLElement } from "./src/HTMLElement.js";

const theme1 = {
    "Element": {
        "": {
            backgroundColor: "yellow",
            "color": "brown",
        },
        ":disabled": {
            backgroundColor: "gray",
            "color": "red",
        },
    },
    "HTMLBodyElement": {
        "": {
            backgroundColor: "white",
            "color": "black",
        }
    },
    "HTMLInputElement": {
        "::selection": {
            backgroundColor: "purple",
            color: "yellow",
        },
        ":hover::selection": {
            backgroundColor: "lightblue",
            color: "white",
        }
    }
};

initHTMLElement(document.body, {className: "HTMLBodyElement"});
document.body.theme = theme1;

const input1 = document.createElement('input');
document.body.append(input1);
initHTMLElement(input1, {className: "HTMLInputElement", value: "the quick brown fox"});
  
const input2 = document.createElement('input');
document.body.append(input2);
