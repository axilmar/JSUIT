import "./init.js";

const initObjectProperties = (obj, props) => {
    for(const propName in props) {
        const propValue = props[propName];
        obj[propName] = propValue;
    }
}

/**
 * Initializes an object.
 * 
 * It goes through the properties of the props object,
 * and then assigns it to the same property of the object.
 * 
 * @param {*} obj the object to initialize.
 * @param {*} props the properties object.
 * 
 * @returns the object.
 */
export const initObject = (obj, props) => {
    initObjectProperties(obj, props);
    return obj;    
}
