import { initIcon } from "./icon.js";

//the url of the remove circle outline svg; resolved relative to this module
const URL_REMOVECIRCLEOUTLINE = new URL('../../assets/icons/removeCircleOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove circle outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeCircleOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveCircleOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeCircleOutlineIcon', url: URL_REMOVECIRCLEOUTLINE }, ...properties);
}

/**
 * Creates a remove circle outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeCircleOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveCircleOutlineIcon(element, ...properties);
    return element;
}
