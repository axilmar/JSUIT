import { initHTMLElement } from "./HTMLElement.js";
import { 
    getHTMLInputElementValuePropertyDescriptor, 
    getHTMLInputElementPatternPropertyDescriptor,
    getHTMLInputElementValidityPropertyDescriptor,
    isInstanceOfHTMLInputElement, 
    addClassName,
    addState
} from "./util.js";

const valuePropertyDescriptor = getHTMLInputElementValuePropertyDescriptor();
const patternPropertyDescriptor = getHTMLInputElementPatternPropertyDescriptor();
const validityPropertyDescriptor = getHTMLInputElementValidityPropertyDescriptor();

const VALUE_PROP = "__value";
const VALID_PROP = "__valid";
const REGEX_PROP = "__regex";

const defineProperties = (elem) => {
    //the value property shall work for all types of input
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

    //override the pattern property to keep a regular expression object to use
    //without creating a new regex each time the value changes
    Object.defineProperty(elem, 'pattern', {
        get: function() {            
            return patternPropertyDescriptor.get.call(this);
        },
        set: function(v) {
            patternPropertyDescriptor.set.call(this, v);
            this[REGEX_PROP] = v ? new RegExp(v) : null;
        }
    })

    //the valid property; read only
    Object.defineProperty(elem, 'valid', {
        get: function () {
            return this[VALID_PROP];
        }
    });

    //override the validity property to check the pattern in case of a number
    Object.defineProperty(elem, 'validity', {
        get: function () {
            const validity = validityPropertyDescriptor.get.call(this);
            let numericPatternValid, validUI;
            if (this.type === 'number') {
                numericPatternValid = this[REGEX_PROP]?.test(this.valueAsNumber) ?? true;
                validUI = !validity.badInput && numericPatternValid && !validity.rangeOverflow && !validity.rangeUnderflow &&!validity.valueMissing;
            }
            else {
                numericPatternValid = !validity.patternMismatch;
                validUI = validity.valid;
            }
            return {
                badInput: validity.badInput,
                customError: validity.customError,
                patternMismatch: !numericPatternValid,
                rangeOverflow: validity.rangeOverflow,
                rangeUnderflow: validity.rangeUnderflow,
                stepMismatch: validity.stepMismatch,
                tooLong: validity.tooLong,
                tooShort: validity.tooShort,
                typeMismatch: validity.typeMismatch,
                valid: validity.valid && numericPatternValid,
                validUI,
                valueMissing: validity.valueMissing
            };
        }
    })
}

const addEventHandlers = (elem) => {
    elem.addEventListener("input", (event) => {
        if (!event.isComposing) {
            event.target.checkValidity();
        }
    });
}

const overrideMethodGetStates = (elem) => {    
    const originalGetStates = elem.getStates;
    elem.getStates = function() {
        const result = originalGetStates.call(this);
        addState(result, this[VALID_PROP], "valid", "invalid");
        return result;
    }
}

const overrideMethodCheckValidity = (elem) => {
    elem.checkValidity = function () {
        const validity = this.validity;
        const valid = validity.valid;
        const validUI = validity.validUI;

        //revert value if needed
        if (validUI) {
            this[VALUE_PROP] = this.value;
        }
        else {
            this.value = this[VALUE_PROP];
            valid = true;
        }

        //update valid property
        if (this[VALID_PROP] === undefined || valid !== this[VALID_PROP]) {
            this[VALID_PROP] = valid;
            this.updateStyle?.();
            if (valid) {
                this.dispatchEvent(new Event('valid'));
            }
            else {                
                this.dispatchEvent(new Event('invalid'));
            }
        }

        return valid;
    }
}

const overrideMethods = (elem) => {
    overrideMethodGetStates(elem);
    overrideMethodCheckValidity(elem);
}

const initProperties = (elem) => {
    elem[VALUE_PROP] = elem.value;
    elem.checkValidity();
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
 *      - 'valid':
 *          Read only property which returns the current validity status of the object.
 * 
 * The following states are added to the input element:
 * 
 *      - 'valid'/'invalid': set according to the validity of the value.
 * 
 * Additional changes:
 *      
 *      1. the pattern is also checked for numbers.
 *      2. invalid values are not allowed, except when they can become valid with additional input.
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
    initHTMLElement(elem, addClassName(props, "HTMLInputElement input"), children);
    overrideMethods(elem);
    initProperties(elem);
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
