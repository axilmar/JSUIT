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
 * Checks if the given object is an instance of class HTMLSpanElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLSpanElement, false otherwise.
 */
export const isInstanceOfHTMLSpanElement = (obj) => obj instanceof HTMLSpanElement;

/**
 * Checks if the given object is an instance of class HTMLDivElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLDivElement, false otherwise.
 */
export const isInstanceOfHTMLDivElement = (obj) => obj instanceof HTMLDivElement;

/**
 * Checks if the given object is an instance of class HTMLAnchorElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLAnchorElement, false otherwise.
 */
export const isInstanceOfHTMLAnchorElement = (obj) => obj instanceof HTMLAnchorElement;

/**
 * Checks if the given object is an instance of class HTMLAreaElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLAreaElement, false otherwise.
 */
export const isInstanceOfHTMLAreaElement = (obj) => obj instanceof HTMLAreaElement;

/**
 * Checks if the given object is an instance of class HTMLMediaElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLMediaElement, false otherwise.
 */
export const isInstanceOfHTMLMediaElement = (obj) => obj instanceof HTMLMediaElement;

/**
 * Checks if the given object is an instance of class HTMLAudioElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLAudioElement, false otherwise.
 */
export const isInstanceOfHTMLAudioElement = (obj) => obj instanceof HTMLAudioElement;

/**
 * Checks if the given object is an instance of class HTMLBRElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLBRElement, false otherwise.
 */
export const isInstanceOfHTMLBRElement = (obj) => obj instanceof HTMLBRElement;

/**
 * Checks if the given object is an instance of class HTMLButtonElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLButtonElement, false otherwise.
 */
export const isInstanceOfHTMLButtonElement = (obj) => obj instanceof HTMLButtonElement;

/**
 * Checks if the given object is an instance of class HTMLCanvasElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLCanvasElement, false otherwise.
 */
export const isInstanceOfHTMLCanvasElement = (obj) => obj instanceof HTMLCanvasElement;

/**
 * Checks if the given object is an instance of class HTMLDataElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLDataElement, false otherwise.
 */
export const isInstanceOfHTMLDataElement = (obj) => obj instanceof HTMLDataElement;

/**
 * Checks if the given object is an instance of class HTMLDataListElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLDataListElement, false otherwise.
 */
export const isInstanceOfHTMLDataListElement = (obj) => obj instanceof HTMLDataListElement;

/**
 * Checks if the given object is an instance of class HTMLDialogElement.
 * @param {*} object the object to check.
 * @returns true if the given object is an instance of class HTMLDialogElement, false otherwise.
 */
export const isInstanceOfHTMLDialogElement = (obj) => obj instanceof HTMLDialogElement;


/**
 * Helper function for adding a class name to props.
 * The new class name is added as a prefix to the existing class name.
 * @param {*} props the properties object.
 * @param {*} className the new classname.
 * @returns the properties.
 */
export const addClassName = (props, className) => {
    const existingClassName = props.className ?? '';
    const space = existingClassName ? ' ' : '';
    props.className = `${className}${space}${existingClassName}`;
    return props;
}

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

/**
 * Helper function for setting the children of an element to the enabled or disabled state.
 * @param {*} elem the parent element.
 * @param {*} enabled the enabled value.
 */
export const setChildrenEnabled = (elem, enabled) => {
    for(let child = elem.firstElementChild; child; child = child.nextElementSibling) {
        child.enabled = enabled;
    }
}

/**
 * Appends children to an element, using the element's 'append' method.
 * @param {*} parent parent element; if falsy, nothing happens.
 * @param {*} children children to add; it can be an array of nodes or a single node; if falsy, nothing happens.
 */
export const appendChildrenToElement = (parent, children) => {
    if (parent) {
        console.assert(isInstanceOfElement(parent));
        if (children) {
            if (Array.isArray(children)) {
                parent.append(...children);
            }
            else {
                parent.append(children);
            }
        }
    }
}

/**
 * Appends children to a node, using the node's 'appendChild' method.
 * @param {*} parent parent node; if falsy, nothing happens.
 * @param {*} children children to add; it can be an array of nodes or a single node; if falsy, nothing happens.
 */
export const appendChildrenToNode = (parent, children) => {
    if (parent) {
        console.assert(isInstanceOfNode(parent));
        if (children) {
            if (Array.isArray(children)) {
                for(const child of children) {
                    parent.appenChild(child);
                }
            }
            else {
                parent.appendChild(children);
            }
        }
    }
}

/**
 * Appends children to a parent.
 * The parent can be an element or a node.
 * If the parent is an element, then the method 'append' is used.
 * If the parent is a node, then the method 'appendChild' is used.
 * If the parent is not an element or a node, an exception is thrown.
 * @param {*} parent the element or node to add the children to; if falsy, nothing happens.
 * @param {*} children the array of children to add or a single node to add; if falsy, nothing happens.
 * @throws Error if the parent is not an element or a node.
 */
export const appendChildren = (parent, children) => {
    if (parent) {
        if (isInstanceOfElement(parent)) {
            appendChildrenToElement(parent, children);
        }
        else if (isInstanceOfNode(parent)) {
            appendChildrenToNode(parent, children);
        }
        else {
            throw new Error("appendChildren: parent is not an Element or a Node.");
        }
    }
}

/**
 * Checks if an object is a string.
 * @param {*} obj object to check. 
 * @returns returns true if the object is a string.
 */
export const isString = (obj) => {
    return typeof obj === 'string' || obj instanceof String;
}

/**
 * Checks if an object is a function.
 * @param {*} obj object to check.
 * @returns true if the object is a function.
 */
export const isFunction = (obj) => {
    return typeof obj === 'function';
}
