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

const REGEX_PROP = '__regex';
const VALIDITY_PROP = '__validity';
const VALID_PROP = '__valid';

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
            }
            else if (this.type === 'image') {
                this.src = v;
            }
            else if (this.type === 'number' || this.type === 'range') {
                this.valueAsNumber = v;
                updateValidity(this);
            }
            else {
                valuePropertyDescriptor.set.call(this, v);            
            }
        }
    });    

    //maintain a regex for quick access
    Object.defineProperty(elem, 'pattern', {
        get: function() {            
            return patternPropertyDescriptor.get.call(this);
        },
        set: function(v) {
            patternPropertyDescriptor.set.call(this, v);
            this[REGEX_PROP] = v ? new RegExp(v) : null;
            updateValidity(this);
        }
    });

    //return own validity state structure for number
    Object.defineProperty(elem, 'validity', {
        get: function() {
            return this.type === 'number' ? { ...this[VALIDITY_PROP] } : validityPropertyDescriptor.get.call(this);
        }
    });

    //the default value for the saved validity state
    elem[VALID_PROP] = true;
}

const updateValidity = (elem) => {
    let valid;
    const originalValidity = validityPropertyDescriptor.get.call(elem);

    //for number, do additional checks
    if (elem.type === 'number') {
        elem[VALIDITY_PROP] = {
            badInput: originalValidity.badInput,
            customError: originalValidity.customError,
            patternMismatch: originalValidity.patternMismatch,
            rangeOverflow: originalValidity.rangeOverlow,
            rangeUnderflow: originalValidity.rangeUnderflow,
            stepMismatch: originalValidity.stepMismatch,
            tooLong: originalValidity.tooLong,
            tooShort: originalValidity.tooShort,
            typeMismatch: originalValidity.typeMismatch,
            valid: originalValidity.valid,
            valueMissing: originalValidity.valueMissing
        };
        elem[VALIDITY_PROP].patternMismatch = !isNaN(elem.valueAsNumber) && elem[REGEX_PROP] ? !elem[REGEX_PROP].test(elem.valueAsNumber) : false;
        elem[VALIDITY_PROP].valid &&= !elem[VALIDITY_PROP].patternMismatch;
        valid = elem[VALIDITY_PROP].valid;
    }

    else {
        valid = originalValidity.valid;
    }

    const changed = elem[VALID_PROP] != valid;
    elem[VALID_PROP] = valid;
    return changed;
}

//validate input
const addEventHandlers = (elem) => {
    elem.addEventListener("input", (event) => {
        if (!event.isComposing) {
            event.target.checkValidity();
        }
    });
}

const overrideMethods = (elem) => {
    //override the 'getStates()' method to get the appropriate state from its valid property
    const originalGetStates = elem.getStates;
    elem.getStates = function() {
        const result = originalGetStates.call(this);
        addState(result, this[VALID_PROP], "valid", "invalid");
        return result;
    }

    //override the checkValidity() method to update the UI status of an object and fire a 'valid'/'invalid' event
    elem.checkValidity = function () {
        const changed = updateValidity(this);
        const valid = this[VALID_PROP];
        if (changed) {
            this.updateStyle?.();
            this.dispatchEvent(new Event(valid ? 'valid' : 'invalid'));
        }
        return valid;
    }
}

/**
 * Initializes an HTML input element.
 * 
 * The element gets the 'HTMLInputElement' and 'input' class names.
 * 
 * The following properties are added to/overriden for the input element:
 * 
 *      - 'value': 
 *          - for checkbox and radio, it gets and sets the 'checked' value; 
 *          - for image, it gets and sets the 'src' value;
 *          - for number and range, it gets and sets the numeric value (i.e. 'valueAsNumber');
 *          - for other types, it gets and sets the normal value of the input element.
 * 
 *      - 'validity:
 *          - returns custom structure with enhanced values: 
 *              - patternMismatch is also set to true if the pattern is set and the number as string does not conform to it.
 * 
 * The following methods are overriden for the input element:
 * 
 *      - 'checkValidity': 
 *          - it updates the style of the element.
 *          - if fires a 'valid' or 'invalid' generic event depending on validity state.
 * 
 * The following states are added to the input element:
 * 
 *      - 'valid'/'invalid': set according to the validity of the value.
 * 
 * Other changes:
 * 
 *      - input validity changes as the input element value is modified, and not on 'submit'.
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
    updateValidity(elem);
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
    return input({type: 'number', ...props}, children);
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
