import { initIcon } from "./icon.js";

//the url of the five k svg; resolved relative to this module
const URL_FIVEK = new URL('../../assets/icons/fiveK.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiveKIcon', url: URL_FIVEK }, ...properties);
}

/**
 * Creates a five k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveKIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveKIcon(element, ...properties);
    return element;
}
