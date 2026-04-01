import { initHTMLElement } from "./HTMLElement.js";
import { 
    getHTMLInputElementValuePropertyDescriptor, 
    isInstanceOfHTMLInputElement, 
    addClassName, 
    isNumber, 
    getDecimalSeparator, 
    countDecimals
} from "./util.js";

const valuePropertyDescriptor = getHTMLInputElementValuePropertyDescriptor();
const VALID_PROPERTY_NAME = "__valid";

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
                this.__value = Boolean(v);
                this.checked = v;
                return;
            }

            if (this.type === 'image') {
                this.__value = v;
                this.src = v;
                return;
            }

            if (this.type === 'number' || this.type === 'range') {
                this.__value = Number(v);
                this.valueAsNumber = v;
                return;
            }

            this.__value = v;
            valuePropertyDescriptor.set.call(this, v);
        }
    });    

    Object.defineProperty(elem, 'valid', {
        get: function() {
            return this.checkValidity();
        }
    });
}

const createNumberPattern = (sign, numberOfDecimals) => {
    let str = '^';

    if (sign) {
        str += '[+-]?';
    }

    str += '\\d+';

    if (numberOfDecimals > 0) {
        str += `([${getDecimalSeparator()}]\\d{0,${numberOfDecimals}})?`;
    }

    str += '$';

    return new RegExp(str);
}

const processProperties = (props) => {
    if (props.type === 'number') {
        if (!isNumber(props.value)) {
            throw new Error("value is not a number");
        }

        if (!props.pattern) {
            const sign = props.value < 0 || isNumber(props.min) && props.min < 0;
            const numberOfDecimals = Math.max(countDecimals(props.min), countDecimals(props.step), countDecimals(props.max));
            props.pattern = createNumberPattern(sign, numberOfDecimals);
        }
    }

    return props;
}

const validityChanged = (elem, valid) => {
    elem[VALID_PROPERTY_NAME] = valid;
    if (valid) {
        elem.dispatchEvent(new Event("valid"));
    }
    else {
        elem.dispatchEvent(new Event("invalid"));
    }
}

const addEventHandlers = (elem) => {
    elem.addEventListener("input", (event) => {
        event.target.checkValidity();
    });

    elem.addEventListener("invalid", (event) => {
        event.target.updateStyle?.();
    });

    elem.addEventListener("valid", (event) => {
        event.target.updateStyle?.();
    });
}

const initValidProperty = (elem) => {
    elem[VALID_PROPERTY_NAME] = elem.checkValidity();
}

const overrideMethods = (elem) => {
    //check validity
    const originalCheckValidity = elem.checkValidity;
    elem.checkValidity = function () {
        const result = originalCheckValidity.call(this);
        if (this[VALID_PROPERTY_NAME] === undefined || result !== this[VALID_PROPERTY_NAME]) {
            validityChanged(this, result);
        }
        return result;
    }

    //get states
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
 * A `value` property is added to the object, which is interpreted as the 'value' property 
 * of the HTMLInput class, except in these cases:
 * 
 *  - checkbox, radio: property 'checked'.
 *  - image: property 'src'.
 *  - number, range: property 'valueAsNumber'.
 * 
 * If the type is 'number', and a pattern is not defined, then the appropriate
 * pattern is created from the properties 'value', 'step', 'min', and 'max', in that order:
 * if any of them defines decimal digits, then the pattern constructed
 * contains the highest number of decimal digits between these values.
 * The presence of a sign is also determined from the 'value' or 'min' value:
 * if negative, then a sign is added to the pattern.
 * 
 * A `valid` property is also added to the element, which returns the value of the method `checkValidity`.
 * 
 * States 'valid' and 'invalid' are added to the property, set when the input is in the corresponding state.
 * 
 * The 'checkValidity' method is enhanced to dispatch 'valid' and 'invalid' events when the validity status changes.
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
    initValidProperty(elem);
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
