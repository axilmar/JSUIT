import { initIcon } from "./icon.js";

//the url of the two mp svg; resolved relative to this module
const URL_TWOMP = new URL('../../assets/icons/twoMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a two mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twoMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwoMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twoMpIcon', url: URL_TWOMP }, ...properties);
}

/**
 * Creates a two mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twoMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTwoMpIcon(element, ...properties);
    return element;
}
