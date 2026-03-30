import { Text } from "./src/Text.js";
import { img } from "./src/HTMLImageElement.js";
import { span } from "./src/HTMLSpanElement.js";
import { div } from "./src/HTMLDivElement.js";
import { a } from "./src/HTMLAnchorElement.js";
import { area } from "./src/HTMLAreaElement.js";
import { audio } from "./src/HTMLAudioElement.js";
import { br } from "./src/HTMLBRElement.js";
import { button } from "./src/HTMLButtonElement.js";
import { canvas } from "./src/HTMLCanvasElement.js";
import { data } from "./src/HTMLDataElement.js";
import { datalist } from "./src/HTMLDataListElement.js";
import { dialog } from "./src/HTMLDialogElement.js";
import { dl } from "./src/HTMLDListElement.js";
import { fieldset } from "./src/HTMLFieldSetElement.js";
import { form } from "./src/HTMLFormElement.js";
import { h1, h2, h3, h4, h5, h6 } from "./src/HTMLHeadingElement.js";

const btn1 = document.createElement("button");
btn1.innerHTML = "Click me";
document.body.append(btn1);

const btn2 = document.createElement("button");
document.body.append(btn2);

span({parent: document.body, fontSize: "32px"}, "The quick brown fox");
const img1 = img({parent: btn2, value: "test.png", border: "16px solid"});

const theme = {
    /*
    "Element": {
        "enabled": {
            backgroundColor: "green"
        }
    },*/
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

br({parent: document.body});

button({parent: document.body, onclick: () => alert("Clicked!")}, "Another button");

canvas({parent: document.body, width: 400, height: 300});

data({parent: document.body, value:1}, "Value 1");
data({parent: document.body, value:2}, "Value 2");
data({parent: document.body, value:3}, "Value 3");
datalist({parent: document.body});

dialog({parent: document.body, open:false}, "this is a dialog!");

dl({parent: document.body});

fieldset({parent: document.body});

form({parent: document.body});

h1({parent: document.body}, "A title with H1 style");
h2({parent: document.body}, "A title with H2 style");
h3({parent: document.body}, "A title with H3 style");
h4({parent: document.body}, "A title with H4 style");
h5({parent: document.body}, "A title with H5 style");
h6({parent: document.body}, "A title with H6 style");
