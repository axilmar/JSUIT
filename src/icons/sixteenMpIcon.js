import { initIcon } from "./icon.js";

//the url of the sixteen mp svg; resolved relative to this module
const URL_SIXTEENMP = new URL('../../assets/icons/sixteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sixteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sixteenMpIcon', url: URL_SIXTEENMP }, ...properties);
}

/**
 * Creates a sixteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initSixteenMpIcon(element, ...properties);
    return element;
}
