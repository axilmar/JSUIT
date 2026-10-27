import { initIcon } from "./icon.js";

//the url of the whatshot svg; resolved relative to this module
const URL_WHATSHOT = new URL('../../assets/icons/whatshot.svg', import.meta.url).href;

/**
 * Initializes an icon element as a whatshot icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/whatshot.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWhatshotIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'whatshotIcon', url: URL_WHATSHOT }, ...properties);
}

/**
 * Creates a whatshot icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const whatshotIcon = (...properties) => {
    const element = document.createElement('div');
    initWhatshotIcon(element, ...properties);
    return element;
}
