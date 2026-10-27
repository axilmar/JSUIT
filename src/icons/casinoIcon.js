import { initIcon } from "./icon.js";

//the url of the casino svg; resolved relative to this module
const URL_CASINO = new URL('../../assets/icons/casino.svg', import.meta.url).href;

/**
 * Initializes an icon element as a casino icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/casino.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCasinoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'casinoIcon', url: URL_CASINO }, ...properties);
}

/**
 * Creates a casino icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const casinoIcon = (...properties) => {
    const element = document.createElement('div');
    initCasinoIcon(element, ...properties);
    return element;
}
