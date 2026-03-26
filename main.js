import { Text } from "./src/Text.js";
import { Image } from "./src/HTMLImageElement.js";

Text({parent: document.body, value: "The quick brown fox"});
const img = Image({parent: document.body, value: "test.png", border: "16px solid"});

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
