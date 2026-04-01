import { initHTMLElement } from "./HTMLElement.js";
import { getHTMLInputElementValuePropertyDescriptor, isInstanceOfHTMLInputElement, addClassName, isNumber, getDecimalSeparator, countDecimals } from "./util.js";

const valuePropertyDescriptor = getHTMLInputElementValuePropertyDescriptor();

const defineProperties = (elem) => {
    Object.defineProperty(elem, "value", {
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

const createNumberPattern = (sign, numberOfDecimals) => {
    let str = '';

    if (sign) {
        str += '[+-]?';
    }

    str += '\\d+';

    if (numberOfDecimals > 0) {
        str += `([${getDecimalSeparator()}]\\d+{,${numberOfDecimals}})?`;
    }

    return new RegExp(str, 'g');
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

/**
 * Initializes an HTML input element.
 * 
 * The element gets the 'HTMLInputElement' and 'input' class names.
 * 
 * A 'value' property is added to the object, which is interpreted as the 'value' property 
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
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLInputElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLInputElement(elem), 'instanceof HTMLInputElement');
    defineProperties(elem);
    props = processProperties(props);
    return initHTMLElement(elem, addClassName(props, "HTMLInputElement input"), children);
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
