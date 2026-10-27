import { initIcon } from "./icon.js";

//the url of the check circle outline svg; resolved relative to this module
const URL_CHECKCIRCLEOUTLINE = new URL('../../assets/icons/checkCircleOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check circle outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkCircleOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckCircleOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkCircleOutlineIcon', url: URL_CHECKCIRCLEOUTLINE }, ...properties);
}

/**
 * Creates a check circle outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkCircleOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckCircleOutlineIcon(element, ...properties);
    return element;
}
