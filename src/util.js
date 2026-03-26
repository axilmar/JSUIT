/**
 * Checks if the given object is an instance of class EventTarget.
 * @param {*} obj the object to check.
 * @returns true if the given object is an instance of class EventTarget, false otherwise.
 */
export const isInstanceOfEventTarget = (obj) => obj instanceof EventTarget;

/**
 * Checks if the given object is an instance of class Node.
 * @param {*} obj the object to check.
 * @returns true if the given object is an instance of class Node, false otherwise.
 */
export const isInstanceOfNode = (obj) => obj instanceof Node;

/**
 * Checks if the given object is an instance of class CharacterData.
 * @param {*} obj the object to check.
 * @returns true if the given object is an instance of class CharacterData, false otherwise.
 */
export const isInstanceOfCharacterData = (obj) => obj instanceof CharacterData;

/**
 * Checks if the given object is an instance of class Text.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class Text, false otherwise.
 */
export const isInstanceOfText = (obj) => obj instanceof Text;

/**
 * Checks if the given object is an instance of class Element.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class Element, false otherwise.
 */
export const isInstanceOfElement = (obj) => obj instanceof Element;

/**
 * Checks if the given object is an instance of class HTMLElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLElement, false otherwise.
 */
export const isInstanceOfHTMLElement = (obj) => obj instanceof HTMLElement;

/**
 * Checks if the given object is an instance of class HTMLImageElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLImageElement, false otherwise.
 */
export const isInstanceOfHTMLImageElement = (obj) => obj instanceof HTMLImageElement;

/**
 * Checks if the given object is an instance of class HTMLButtonElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLButtonElement, false otherwise.
 */
export const isInstanceOfHTMLButtonElement = (obj) => obj instanceof HTMLButtonElement;

/**
 * Removes all whitespace from a string.
 * @param {*} str string to remove the whitespace from; if undefined or null, an empty string is returned.
 * @returns a new string without the whitespace.
 */
export const removeWhitespace = (str) => {
    return str ? str.replace(/\s/g, '') : '';
}

/**
 * Removes whitespace from strings in an array.
 * @param {*} arr array of strings.
 * @returns the same array but with the whitespace removed for each string.
 */
export const removeWhitespaceFromArray = (arr) => {
    for(let index = 0; index < arr.length; ++index) {
        arr[index] = removeWhitespace(arr[index]);
    }
    return arr;
}

/**
 * Counts the number of occurrences of the substring into a string.
 * @param {*} str the string to search into.
 * @param {*} substr the string to search for.
 * @returns number of occurrences of the substring into the given string.
 */
export const countSubstrings = (str, substr) => {
    const index = 0;
    let result = 0;
    for(;;) {
        const newIndex = str.indexOf(substr, index);
        if (newIndex >= 0) {
            ++result;
            index = newIndex + substr.length;
        }
        else {
            break;
        }
    }
    return result;
}

/**
 * Returns a string which contains data sorted from another string.
 * @param {*} str the string that contains the data.
 * @param {*} delim the delimiter.
 * @param {*} compareFn the function for `array.sort()`.
 * @returns the string with the data sorted.
 */
export const sortStringData = (str, delim = ',', compareFn) => {
    return str.split(delim).sort(compareFn).join(delim);
}
