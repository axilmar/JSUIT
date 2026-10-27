import { initIcon } from "./icon.js";

//the url of the add box svg; resolved relative to this module
const URL_ADDBOX = new URL('../../assets/icons/addBox.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add box icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addBox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddBoxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addBoxIcon', url: URL_ADDBOX }, ...properties);
}

/**
 * Creates an add box icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addBoxIcon = (...properties) => {
    const element = document.createElement('div');
    initAddBoxIcon(element, ...properties);
    return element;
}
