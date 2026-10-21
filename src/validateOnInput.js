//creates the regular expression for the pattern attribute (which must match the whole value), or null if the pattern is invalid
const createPatternRegExp = (pattern) => {
    for (const flags of ['v', 'u']) {
        try {
            return new RegExp(`^(?:${pattern})$`, flags);
        }
        catch (error) {
        }
    }
    return null;
};

//returns true if the element's value does not match its pattern; no pattern, empty value or invalid pattern never mismatch
const hasPatternMismatch = (element) => {
    const pattern = element.getAttribute('pattern');
    if (!pattern || element.value === '') {
        return false;
    }
    const regExp = createPatternRegExp(pattern);
    return regExp !== null && !regExp.test(element.value);
};

/**
 * Adds an 'input' event listener that sets the element's 'error' property, once per event, to true
 * if the value is invalid and to false otherwise.
 * 
 * The value is invalid if the element has a 'pattern' attribute that the (non-empty) value does not match.
 * The pattern is checked for every input type, including the ones for which the browser ignores it.
 * 
 * If `checkValidity` is true, the value is also invalid if the browser's constraint validation fails
 * (`element.validity.valid` is false), which is what the non-textual types (number, date, etc.) and
 * the email and url types need.
 * 
 * @param {*} element the element to validate.
 * @param {boolean} checkValidity true to also use the browser's constraint validation.
 */
export const validateOnInput = (element, checkValidity = false) => {
    console.assert(element instanceof HTMLInputElement);
    element.addEventListener('input', () => {
        element.error = (checkValidity && !element.validity.valid) || hasPatternMismatch(element);
    });
}
