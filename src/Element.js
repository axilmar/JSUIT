import { initNode } from "./Node.js";
import { isInstanceOfElement, appendChildrenToElement } from "./util.js";

let autoIds = {};

const getLastClassName = (className) => {
    const parts = (className ?? '').split(' ');
    return parts.length > 0 ? parts[parts.length - 1] : null;
}

const getAutoId = (className) => {
    const actualClassName = className ?? 'Element';
    let entry = autoIds[actualClassName];
    if (!entry) {
        entry = 1;
        autoIds[actualClassName] = entry;
    }
    const result = autoIds[actualClassName];
    ++autoIds[actualClassName];
    return result;
}

const setAutoElementId = (props) => {
    if (!('id' in props)) {
        const lastClassName = getLastClassName(props.className);
        const autoId = getAutoId(lastClassName);
        props.id = `${lastClassName}-${autoId}`;
    }
    return props;
}

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
 * Initializes an element.
 * 
 * If the element does not have an id, then it gets a numeric id prefixed with its class name.
 * 
 * It initializes the node by invoking `initNode(elem, props)`.
 * 
 * @param {*} elem the element object to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of children to add to this element.
 * 
 * @returns the element object.
 */
export const initElement = (elem, props, children) => {
    console.assert(isInstanceOfElement(elem));
    appendChildrenToElement(elem, children);
    return initNode(elem, setAutoElementId(addClassName(props, "Element")));
}
