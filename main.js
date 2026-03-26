import { Text } from "./src/Text.js";
import { Image } from "./src/HTMLImageElement.js";

const btn1 = document.createElement("button");
btn1.innerHTML = "Click me";
document.body.append(btn1);

const btn2 = document.createElement("button");
document.body.append(btn2);

Text({parent: document.body, value: "The quick brown fox"});
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
        ["enabled,hover,active"]: {
            backgroundColor: "red"
        }*/
    }
};

document.body.theme = theme;

//img.enabled = false;
btn1.addEventListener("mousedown", () => {
    btn2.disabled = true;
});
