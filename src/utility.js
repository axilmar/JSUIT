/**
 * Checks if a value is a string.
 * @param {*} value the value to check.
 * @returns true if the value is a string, false otherwise.
 */
export const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
}

/**
 * Checks if a value is a function.
 * @param {*} value the value to check.
 * @returns true if the value is a function, false otherwise.
 */
export const isFunction = (value) => {
    return typeof value === 'function' || value instanceof Function;
}

/**
 * Checks if a value is ab object, i.e. not null, not an array, and typeof value returns 'object'.
 * @param {*} value the value to check.
 * @returns true if the value is an object, false otherwise.
 */
export const isObject = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Check sif a value is an array.
 * It simply invokes `Array.isArray(value)`; provided for ease of use.
 * @param {*} value the value to check.
 * @returns true if the value is an array, false otherwise.
 */
export const isArray = (value) => {
    return Array.isArray(value);
}

/**
 * Checks that a value is a primitive.
 * @param {*} value the value to check.
 * @returns true if the value is a primitive, false otherwise.
 */
export const isPrimitive = (value) => {
    return value === null || (typeof value !== 'object' && typeof value !== 'function');
}

/**
 * Checks if the given property of the object is writable.
 * 
 * If a property descriptor is not found in the object,
 * then the prototype object for that object is also checked.
 * 
 * @param {*} object the object to search for the property.
 * @param {*} propertyName the property's name.
 * @returns true if the object has a writable property with such name or does not have such a property,
 *  false otherwise.
 */
export const isPropertyWritable = (object, propertyName) => {
    while (object) {
        const descriptor = Object.getOwnPropertyDescriptor(object, propertyName);
        if (descriptor) {
            return descriptor.set || descriptor.writable;
        }
        object = Object.getPrototypeOf(object);
    }
    return true;
}

/**
 * Checks if the given property of the object is read-only.
 * @param {*} object the object to search for the property.
 * @param {*} propertyName the property's name.
 * @returns true if the object has read-only property with that name, false otherwise.
 */
export const isPropertyReadOnly = (object, propertyName) => {
    return !isPropertyWritable(object, propertyName);
}

/**
 * Checks if an object is a DOM node.
 * @param {*} object the object to check.
 * @returns return true of the object is an instance of DOM node, false otherwise.
 */
export const isDOMNode = (object) => {
    return object instanceof Node;
}

/**
 * Checks if an object is a tree node.
 * 
 * An object is a tree node either if it is a DOM node or if it has a function `isTreeNode()` that returns true.
 * 
 * @param {*} object the object to check.
 * @returns true if the object is a tree node, false otherwise.
 */
export const isTreeNode = (object) => {
    return isDOMNode(object) || object.isTreeNode?.() === true;
}

/**
 * Loads an SVG file.
 * @param {*} url the url for the svg file.
 * @returns the svg text.
 */
export async function loadSVG(url) {
    try {
        const response = await fetch(url);
        const svgText = await response.text();
        return svgText;
    }
    catch (error) {
        console.error('loadSVG: error:', error);
    }
}

/**
 * Defines the boolean property 'error' on an element.
 * 
 * Setting it to true adds the given style (css class) to the element;
 * setting it to false removes the style. Getting it returns whether the element has the style.
 * 
 * @param {*} element the element to define the property on.
 * @param {string} errorStyleName the name of the css class for the error style.
 */
export const defineErrorProperty = (element, errorStyleName) => {
    Object.defineProperty(element, 'error', {
        configurable: true,
        enumerable: true,
        get: () => element.classList.contains(errorStyleName),
        set: (value) => { element.classList.toggle(errorStyleName, !!value); }
    });
}

/**
 * Adds a stylesheet to the document's adopted stylesheets, if it is not already there.
 * 
 * @param {CSSStyleSheet} styleSheet the stylesheet to add.
 */
export const adoptStyleSheet = (styleSheet) => {
    if (!document.adoptedStyleSheets.includes(styleSheet)) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
    }
}

/**
 * Creates a deep copy of the given value.
 * @param {*} value the value to create a deep copy of.
 * @param {Boolean} cloneDOMNodes if true, DOM nodes are cloned too.
 * @returns the deep copy of the given value.
 */
export const deepCopy = (value, cloneDOMNodes = false) => {
    let result;

    //copy array
    if (Array.isArray(value)) {
        result = [];
        for(const arrayValue of value) {
            result.push(deepCopy(arrayValue, cloneDOMNodes));
        }
    }

    //else dom node
    else if (isDOMNode(value)) {
        if (cloneDOMNodes) {
            result = value.cloneNode(true);
        }
        else {
            result = value;
        }
    }

    //else copy object
    else if (isObject(value)) {
        result = {};
        for(const prop in value) {
            const objectValue = value[prop];
            result[prop] = deepCopy(objectValue, cloneDOMNodes);
        }
    }

    //else copy value
    else {
        result = value;
    }

    return result;
}