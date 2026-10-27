import { initIcon } from "./icon.js";

//the url of the textsms svg; resolved relative to this module
const URL_TEXTSMS = new URL('../../assets/icons/textsms.svg', import.meta.url).href;

/**
 * Initializes an icon element as a textsms icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textsms.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextsmsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textsmsIcon', url: URL_TEXTSMS }, ...properties);
}

/**
 * Creates a textsms icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textsmsIcon = (...properties) => {
    const element = document.createElement('div');
    initTextsmsIcon(element, ...properties);
    return element;
}
