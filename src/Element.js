import { initNode } from "./Node.js";

//defines the write-only property 'extraClasses'
const defineExtraClassesProperty = (element) => {
    Object.defineProperty(element, 'extraClasses', {
        configurable: true,
        enumerable: false,
        set: (classNames) => {
            const names = Array.isArray(classNames) ? classNames : String(classNames).split(/\s+/);
            element.classList.add(...names.filter(name => name.length > 0));
        }
    });
};

/**
 * Initializes an element.
 * 
 * It invokes the function `initNode(element, ...properties)`.
 * 
 * The element gets a write-only property 'extraClasses', which accepts a string of
 * space-delimited class names or an array of strings; the class names are appended
 * to the element's class list, keeping the existing ones.
 * 
 * @param {*} element the node to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElement = (element, ...properties) => {
    console.assert(element instanceof Element);
    defineExtraClassesProperty(element);
    initNode(element, ...properties);
}
