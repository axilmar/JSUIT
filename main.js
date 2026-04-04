import { 
    img, 
    span, 
    div, 
    a, 
    area, 
    audio, 
    br, 
    button, 
    canvas, 
    data, 
    datalist, 
    dialog, 
    dl, 
    fieldset, 
    form, 
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    hr, 
    iframe,
    input,
    checkbox,
    radio,
    number,
    password,
    file
} from "./src/HTML.js";

const theme = {
    "img": {
        "disabled": {
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
        }
    },
    "input": {
        "enabled": {            
            color: "black",
            outlineStyle: 'none',
            outlineColor: "black",
            outlineWidth: 0,
            borderRadius: 0
        },
        "focused": {
            outlineStyle: 'solid',
            outlineColor: "blue",
            outlineWidth: "2px",
            borderRadius: "2px"
        },
        "hover": {            
            outlineStyle: 'solid',
            outlineColor: "yellow",
            outlineWidth: "2px",
            borderRadius: "2px"
        },
        "focused,hover": {            
            outlineStyle: 'solid',
            outlineColor: "orange",
            outlineWidth: "2px",
            borderRadius: "2px"
        },
        "invalid": {
            color: "red",
            outlineStyle: 'solid',
            outlineColor: "red",
            outlineWidth: "2px",
            borderRadius: "2px"
        }
    }
};

document.body.theme = theme;

number({parent: document.body, value:5, step: 0.25, min:-10000, max:10000, pattern: /^[-]?\d{0,3}([.]\d{0,3})?$/});
