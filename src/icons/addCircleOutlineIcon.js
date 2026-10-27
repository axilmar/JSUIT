import { initIcon } from "./icon.js";

//the url of the add circle outline svg; resolved relative to this module
const URL_ADDCIRCLEOUTLINE = new URL('../../assets/icons/addCircleOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add circle outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addCircleOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCircleOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addCircleOutlineIcon', url: URL_ADDCIRCLEOUTLINE }, ...properties);
}

/**
 * Creates an add circle outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCircleOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCircleOutlineIcon(element, ...properties);
    return element;
}
