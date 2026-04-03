import { initHTMLElement } from "./HTMLElement.js";
import { 
    getHTMLInputElementValuePropertyDescriptor, 
    getHTMLInputElementPatternPropertyDescriptor,
    getHTMLInputElementMinPropertyDescriptor,
    getHTMLInputElementMaxPropertyDescriptor,
    getHTMLInputElementStepPropertyDescriptor,
    isInstanceOfHTMLInputElement, 
    addClassName,
    isNumber
} from "./util.js";

const valuePropertyDescriptor = getHTMLInputElementValuePropertyDescriptor();
const patternPropertyDescriptor = getHTMLInputElementPatternPropertyDescriptor();
const minPropertyDescriptor = getHTMLInputElementMinPropertyDescriptor();
const maxPropertyDescriptor = getHTMLInputElementMaxPropertyDescriptor();
const stepPropertyDescriptor = getHTMLInputElementStepPropertyDescriptor();

const VALUE_PROP = "__value";
const VALID_PROP = "__valid";
const REGEX_PROP = "__regex";
const MIN_PROP = "__min";
const MAX_PROP = "__max";
const STEP_PROP = "__step";

const getNumericConstraint = (v) => {
    try {
        return Number(v);
    }
    catch {
        return null;
    }
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

    //override the pattern property to set a regular expression object
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

    //since the min property is a string, we also keep it as a number
    Object.defineProperty(elem, 'min', {
        get: function () {
            return minPropertyDescriptor.get.call(this);
        },
        set: function (v) {
            minPropertyDescriptor.set.call(this, v);
            this[MIN_PROP] = getNumericConstraint(v);
        }
    })

    //since the max property is a string, we also keep it as a number
    Object.defineProperty(elem, 'max', {
        get: function () {
            return maxPropertyDescriptor.get.call(this);
        },
        set: function (v) {
            maxPropertyDescriptor.set.call(this, v);
            this[MAX_PROP] = getNumericConstraint(v);
        }
    })

    //since the step property is a string, we also keep it as a number
    Object.defineProperty(elem, 'step', {
        get: function () {
            return stepPropertyDescriptor.get.call(this);
        },
        set: function (v) {
            stepPropertyDescriptor.set.call(this, v);
            this[STEP_PROP] = getNumericConstraint(v);
        }
    })
}

//get the numeric value; returns one of the following:
//1. false if the value is invalid.
//2. true if the value is valid.
//3. a number.
const getNumericValue = (elem, newData) => {
    let value = elem.valueAsNumber;

    //if the value is a valid number, return it
    if (isNumber(value)) {
        return value;
    }

    //if it is not NaN, i.e. if it is infinity or negative infinity,
    //then it is not allowed
    if (!isNaN(value)) {
        return false;
    }

    //check insertion
    if (newData) {
        //the only non-numeric character allowed is the '-'
        if (newData !== '-') {
            return false;
        }

        //if min is 0 or positive, then the '-' is not allowed
        if (isNumber(elem.min) && elem.min >= 0) {
            return false;
        }

        //if the previous value is already negative, then the '-' is not allowed
        if (isNumber(elem[VALUE_PROP]) && elem[VALUE_PROP] < 0) {
            return false;
        }

        //minus character allowed
        return true;
    }

    return true;
}

//check validity of input value; returns false, true, or 'invalid' (to keep the value but set the UI state to 'invalid')
const checkValidity = (elem, newData) => {
    if (elem.type === 'number') {
        const value = getNumericValue(elem, newData);

        //if the value is empty, check the required property
        if (value === null) {
            return !elem.required;
        }

        //if the value is false, then return false
        if (value === false) {
            return false;
        }

        //if the value is true, then return true
        if (value === true) {
            return true;
        }

        //check against the pattern
        const regex = elem[REGEX_PROP];
        if (regex && !regex.test(value)) {
            return false;            
        }

        //check against the min
        if (isNumber(elem[MIN_PROP]) && value < elem[MIN_PROP]) {
            return false;
        }

        //check against the max
        if (isNumber(elem[MAX_PROP]) && value > elem[MAX_PROP]) {
            return false;
        }

        //check against the step
        if (isNumber(elem[STEP_PROP]) && Math.abs(value % elem[STEP_PROP]) > 0) {
            return 'invalid';
        }

        //success
        return true;
    }

    //for other types, return the default validity
    return elem.validity.valid;
}

const addEventHandlers = (elem) => {
    //validate input
    elem.addEventListener("input", (event) => {
        //during composition, do not validate anything
        if (event.isComposing) {
            return;
        }

        //check the validity of the value
        const validility = checkValidity(elem, event.data);
        let valid = validility === true;
        const keepValue = validility !== false;

        //if valid, save the value, else restore it from last good value
        if (keepValue) {
            elem[VALUE_PROP] = elem.value;
        }
        else {
            //if the previous value is restored, then it is valid
            elem.value = elem[VALUE_PROP];
            valid = true;
        }

        //if validity changed, update the valid prop and dispatch the valid or invalid event
        if (!elem[VALID_PROP] || valid != elem[VALID_PROP]) {
            elem[VALID_PROP] = valid;
            elem.updateStyle?.();
            if (valid) {
                elem.dispatchEvent(new Event('valid'));
            }
            else {
                elem.dispatchEvent(new Event('invalid'));
            }
        }
    });
}

const initProperties = (elem) => {
    elem[VALUE_PROP] = elem.value;
    elem[VALID_PROP] = checkValidity(elem);
    elem[MIN_PROP] = getNumericConstraint(elem.min);
    elem[MAX_PROP] = getNumericConstraint(elem.max);
    elem[STEP_PROP] = getNumericConstraint(elem.step);
}

const overrideMethods = (elem) => {
    const originalGetStates = elem.getStates;
    elem.getStates = function() {
        const result = originalGetStates.call(this);        

        //add validity style
        if (this[VALID_PROP]) {
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
 *      - 'valid':
 *          Read only property which returns the validity status of the object.
 * 
 * The following events are dispatched on the input element:
 * 
 *      - 'valid': 
 *          Dispatched when the element becomes valid.
 * 
 *      - 'invalid':
 *          Dispatched when the element becomes invalid.
 * 
 * The following states are added to the input element:
 * 
 *      - 'valid': set if the input element satisfies the validity constraints.
 *      - 'invalid': set if the input element does not satisfy the validity constraints.
 * 
 * A generic Event is dispatched in all the above cases.
 * 
 * Additional changes:
 *      
 *      1. When the type is 'number', the input value is checked against the pattern, if the pattern exists.
 *         If the test is negative, then the element becomes invalid.
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
