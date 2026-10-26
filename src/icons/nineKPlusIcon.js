import { initIcon } from "./icon.js";

//the url of the nine k plus svg; resolved relative to this module
const URL_NINEKPLUS = new URL('../../assets/icons/nineKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nine k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nineKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNineKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NINEKPLUS }, ...properties);
}

/**
 * Creates a nine k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nineKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initNineKPlusIcon(element, ...properties);
    return element;
}
