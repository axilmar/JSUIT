import { Text } from "./src/Text.js";
import { Image } from "./src/HTMLImageElement.js";
import { Span } from "./src/HTMLSpanElement.js";
import { Div } from "./src/HTMLDivElement.js";
import { A } from "./src/HTMLAnchorElement.js";

const btn1 = document.createElement("button");
btn1.innerHTML = "Click me";
document.body.append(btn1);

const btn2 = document.createElement("button");
document.body.append(btn2);

Span({parent: document.body, fontSize: "32px"}, "The quick brown fox");
const img = Image({parent: btn2, value: "test.png", border: "16px solid"});

const theme = {
    "img": {
        "": {
            borderColor: "grey",
            borderStyle: "solid"
        },

        "enabled": {
            borderColor: "cyan",
            borderStyle: "dotted"
        },

        "enabled,hover": {
            borderColor: "pink",
            borderStyle: "dashed"
        }
    },
    "body": {
        "enabled": {
            backgroundColor: "white"
        }/*,
        "enabled,hover,pressed": {
            backgroundColor: "red"
        }*/
    }
};

document.body.theme = theme;

//img.enabled = false;
btn1.addEventListener("mousedown", () => {
    btn2.disabled = true;
});

//btn1.disabled = true;

Div({parent: document.body, backgroundColor: "yellow"}, "A Div");

A({parent: document.body, value:"http://www.cnn.com"}, "cnn");
