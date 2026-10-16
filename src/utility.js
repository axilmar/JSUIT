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
 * Loads a css file dynamically.
 * @param {*} url the url of the css.
 */
export const loadCSS = (url) => {
    //create the link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    //on successful loading
    link.onload = () => {
        console.debug(`CSS File ${url} successfully loaded.`);
    };

    //on error
    link.onerror = () => {
        console.error(`CSS File ${url} could not loaded.`);
    };

    //add the link
    document.head.appendChild(link);
};
