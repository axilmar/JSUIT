import { initIcon } from "./icon.js";

//the url of the twelve mp svg; resolved relative to this module
const URL_TWELVEMP = new URL('../../assets/icons/twelveMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twelve mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twelveMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwelveMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twelveMpIcon', url: URL_TWELVEMP }, ...properties);
}

/**
 * Creates a twelve mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twelveMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTwelveMpIcon(element, ...properties);
    return element;
}
