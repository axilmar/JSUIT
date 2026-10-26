import { initIcon } from "./icon.js";

//the url of the earbuds svg; resolved relative to this module
const URL_EARBUDS = new URL('../../assets/icons/earbuds.svg', import.meta.url).href;

/**
 * Initializes an icon element as an earbuds icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/earbuds.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEarbudsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EARBUDS }, ...properties);
}

/**
 * Creates an earbuds icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const earbudsIcon = (...properties) => {
    const element = document.createElement('div');
    initEarbudsIcon(element, ...properties);
    return element;
}
