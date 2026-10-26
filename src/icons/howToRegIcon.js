import { initIcon } from "./icon.js";

//the url of the how to reg svg; resolved relative to this module
const URL_HOWTOREG = new URL('../../assets/icons/howToReg.svg', import.meta.url).href;

/**
 * Initializes an icon element as a how to reg icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/howToReg.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHowToRegIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOWTOREG }, ...properties);
}

/**
 * Creates a how to reg icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const howToRegIcon = (...properties) => {
    const element = document.createElement('div');
    initHowToRegIcon(element, ...properties);
    return element;
}
