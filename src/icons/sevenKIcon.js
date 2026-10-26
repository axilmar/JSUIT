import { initIcon } from "./icon.js";

//the url of the seven k svg; resolved relative to this module
const URL_SEVENK = new URL('../../assets/icons/sevenK.svg', import.meta.url).href;

/**
 * Initializes an icon element as a seven k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sevenK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSevenKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEVENK }, ...properties);
}

/**
 * Creates a seven k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sevenKIcon = (...properties) => {
    const element = document.createElement('div');
    initSevenKIcon(element, ...properties);
    return element;
}
