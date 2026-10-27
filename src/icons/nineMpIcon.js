import { initIcon } from "./icon.js";

//the url of the nine mp svg; resolved relative to this module
const URL_NINEMP = new URL('../../assets/icons/nineMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nine mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nineMpIcon', url: URL_NINEMP }, ...properties);
}

/**
 * Creates a nine mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineMpIcon = (...properties) => {
    const element = document.createElement('div');
    initNineMpIcon(element, ...properties);
    return element;
}
