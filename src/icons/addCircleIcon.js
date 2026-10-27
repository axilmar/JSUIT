import { initIcon } from "./icon.js";

//the url of the add circle svg; resolved relative to this module
const URL_ADDCIRCLE = new URL('../../assets/icons/addCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addCircleIcon', url: URL_ADDCIRCLE }, ...properties);
}

/**
 * Creates an add circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCircleIcon(element, ...properties);
    return element;
}
