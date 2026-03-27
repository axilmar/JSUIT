import { Text } from "./src/Text.js";
import { img } from "./src/HTMLImageElement.js";
import { span } from "./src/HTMLSpanElement.js";
import { div } from "./src/HTMLDivElement.js";
import { a } from "./src/HTMLAnchorElement.js";
import { area } from "./src/HTMLAreaElement.js";
import { audio } from "./src/HTMLAudioElement.js";

const btn1 = document.createElement("button");
btn1.innerHTML = "Click me";
document.body.append(btn1);

const btn2 = document.createElement("button");
document.body.append(btn2);

span({parent: document.body, fontSize: "32px"}, "The quick brown fox");
const img1 = img({parent: btn2, value: "test.png", border: "16px solid"});

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

//img1.enabled = false;

btn1.addEventListener("mousedown", () => {
    btn2.disabled = true;
});

//btn1.disabled = true;

div({parent: document.body, backgroundColor: "yellow"}, "A Div");

a({parent: document.body, value:"http://www.cnn.com"}, "cnn");

area({parent: document.body, value:"http://www.cnn.com", shape: "rect"}, "cnn");

audio({parent: document.body});
