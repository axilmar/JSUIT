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
const CHECK_VALID_PROP = '__checkValid';
const VALUE_PROP = '__value';
const MINUS_PROP = '__minus';

const updateValidity = (elem) => {
    let valid;
    const originalValidity = validityPropertyDescriptor.get.call(elem);

    //for number, do additional checks
    if (elem.type === 'number') {
        const validity = elem[VALIDITY_PROP];
        validity.badInput = originalValidity.badInput;
        validity.customError = originalValidity.customError;
        validity.patternMismatch = !isNaN(elem.valueAsNumber) && elem[REGEX_PROP] ? !elem[REGEX_PROP].test(elem.valueAsNumber) : false;
        validity.rangeOverflow = originalValidity.rangeOverflow;
        validity.rangeUnderflow = originalValidity.rangeUnderflow;
        validity.stepMismatch = originalValidity.stepMismatch;
        validity.tooLong = originalValidity.tooLong;
        validity.tooShort = originalValidity.tooShort;
        validity.typeMismatch = originalValidity.typeMismatch;
        validity.valueMissing = originalValidity.valueMissing;
        validity.valid = originalValidity.valid && !elem[VALIDITY_PROP].patternMismatch;
        validity.validText = !validity.badInput && !validity.patternMismatch && !validity.rangeOverflow && !validity.rangeUnderflow && !validity.tooLong && !validity.tooShort && !validity.typeMismatch && !validity.valueMissing;
        valid = elem[VALIDITY_PROP].valid;
    }

    else {
        valid = originalValidity.valid;
    }

    const changed = elem[VALID_PROP] != valid;
    elem[VALID_PROP] = valid;
    return changed;
}

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
                this[MINUS_PROP] = elem.valueAsNumber < 0;
            }
            else {
                valuePropertyDescriptor.set.call(this, v);            
            }
            this[VALUE_PROP] = v;
            updateValidity(this);
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

    //the default value for the valid property
    elem[VALID_PROP] = true;
}

const handleBeforeInputEvent = (event) => {
    const elem = event.target;
    if (elem.type === 'number') {        
        //do not allow second 'minus'
        if (event.data === '-') {
            if (elem.valueAsNumber < 0) {
                elem.preventDefault();
            } 
        }

        //do not allow decimal part if the step does not allow it
        else if (event.data === '.') {
            if (Number.isInteger(elem.step)) {
                elem.preventDefault();
            } 
        }

        //do not allow characters that are not numbers
        else if (isNaN(event.data)) {
            event.preventDefault();
        }
    }
}

const handleInputEvent = (event) => {
    const elem = event.target;
    if (elem.type === 'number') {
        const validText = elem[VALIDITY_PROP].validText;
        if (validText) {
            elem[VALUE_PROP] = elem.valueAsNumber;
        }
        else {
            elem.valueAsNumber = elem[VALUE_PROP];
            updateValidity(elem);
        }
    }
}

//validate input
const addEventHandlers = (elem) => {
    elem.addEventListener("beforeinput", (event) => {
        if (!event.isComposing) {
            handleBeforeInputEvent(event);
        }
    });

    elem.addEventListener("input", (event) => {
        if (!event.isComposing) {
            updateValidity(event.target);
            handleInputEvent(event);
            event.target.checkValidity();
        }
    });
}

const initState = (elem) => {
    elem[VALIDITY_PROP] = {};
    elem[VALUE_PROP] = elem.value;
    elem[CHECK_VALID_PROP] = true;
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
        const valid = this[VALID_PROP];
        if (valid !== this[CHECK_VALID_PROP]) {
            this[CHECK_VALID_PROP] = valid;
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
    initState(elem);
    initHTMLElement(elem, addClassName(props, "HTMLInputElement input"), children);
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
