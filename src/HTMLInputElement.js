import { initHTMLElement } from "./HTMLElement.js";
import { 
    getHTMLInputElementValuePropertyDescriptor, 
    isInstanceOfHTMLInputElement, 
    addClassName
} from "./util.js";

const valuePropertyDescriptor = getHTMLInputElementValuePropertyDescriptor();

const defineProperties = (elem) => {
    Object.defineProperty(elem, 'value', {
        get: function () {
            if (this.type === 'checkbox' || this.type === 'radio') {
                return this.checked;
            }

            if (this.type === 'image') {
                return this.src;
            }

            if (this.type === 'number' || this.type === 'range') {
                return this.valueAsNumber;
            }

            return valuePropertyDescriptor.get.call(this);
        },

        set: function (v) {
            if (this.type === 'checkbox' || this.type === 'radio') {
                this.checked = v;
                return;
            }

            if (this.type === 'image') {
                this.src = v;
                return;
            }

            if (this.type === 'number' || this.type === 'range') {
                this.valueAsNumber = v;
                return;
            }

            valuePropertyDescriptor.set.call(this, v);
        }
    });    
}

const processProperties = (props) => {
    if (!props.step) {
        props.step = "any";
    }
    return props;
}

const addEventHandlers = (elem) => {
    elem.addEventListener("input", (event) => {
        if (event.isComposing) {
            return;
        }
        console.log(elem.validity);
        //TODO validate the input properly
    });
}

const overrideMethods = (elem) => {
    const originalGetStates = elem.getStates;
    elem.getStates = function() {
        const result = originalGetStates.call(this);        
        if (this[VALID_PROPERTY_NAME]) {
            result.push("valid");
        }
        else {
            result.push("invalid");
        }
        return result;
    }
}

/**
 * Initializes an HTML input element.
 * 
 * The element gets the 'HTMLInputElement' and 'input' class names.
 * 
 * The following properties are added to the input element:
 * 
 *      - 'value': 
 *          - for checkbox and radio, it returns the 'checked' value; 
 *          - for image, it returns the 'src' value;
 *          - for number and range, it returns a numeric value (i.e. 'valueAsNumber');
 *          - for other types, it returns the normal value of the input element.
 * 
 * The following states are added to the input element:
 * 
 *      - 'valid': set if the input element satisfies the validity constraints.
 *      - 'invalid': set if the input element does not satisfy the validity constraints.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLInputElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLInputElement(elem), 'instanceof HTMLInputElement');
    defineProperties(elem);
    addEventHandlers(elem);
    props = processProperties(props);
    initHTMLElement(elem, addClassName(props, "HTMLInputElement input"), children);
    initProperties(elem);
    overrideMethods(elem);
    return elem;
}

/**
 * creates an HTML input element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLInputElement = (props, children) => {
    const obj = document.createElement('input');
    return initHTMLInputElement(obj, props, children);
}

/**
 * creates an HTML input element.
 * Same as `HTMLInputElement`.
 */
export const input = HTMLInputElement;

/**
 * creates an HTML checkbox input element.
 * Same as `HTMLInputElement`.
 */
export const checkbox = (props, children) => {
    return input({type: 'checkbox', ...props}, children);
}

/**
 * creates an HTML color input element.
 * Same as `HTMLInputElement`.
 */
export const color = (props, children) => {
    return input({type: 'color', ...props}, children);
}

/**
 * creates an HTML date input element.
 * Same as `HTMLInputElement`.
 */
export const date = (props, children) => {
    return input({type: 'date', ...props}, children);
}

/**
 * creates an HTML datetime-local input element.
 * Same as `HTMLInputElement`.
 */
export const datetime = (props, children) => {
    return input({type: 'datetime-local', ...props}, children);
}

/**
 * creates an HTML email input element.
 * Same as `HTMLInputElement`.
 */
export const email = (props, children) => {
    return input({type: 'email', ...props}, children);
}

/**
 * creates an HTML file input element.
 * Same as `HTMLInputElement`.
 */
export const file = (props, children) => {
    return input({type: 'file', ...props}, children);
}

/**
 * creates an HTML number input element.
 * Same as `HTMLInputElement`.
 */
export const number = (props, children) => {
    return input({type: 'number', value:0, ...props}, children);
}

/**
 * creates an HTML password input element.
 * Same as `HTMLInputElement`.
 */
export const password = (props, children) => {
    return input({type: 'password', ...props}, children);
}

/**
 * creates an HTML radio input element.
 * Same as `HTMLInputElement`.
 */
export const radio = (props, children) => {
    return input({type: 'radio', ...props}, children);
}

/**
 * creates an HTML range input element.
 * Same as `HTMLInputElement`.
 */
export const range = (props, children) => {
    return input({type: 'range', ...props}, children);
}

/**
 * creates an HTML time input element.
 * Same as `HTMLInputElement`.
 */
export const time = (props, children) => {
    return input({type: 'time', ...props}, children);
}

/**
 * creates an HTML url input element.
 * Same as `HTMLInputElement`.
 */
export const url = (props, children) => {
    return input({type: 'url', ...props}, children);
}
