import { initIcon } from "./icon.js";

//the url of the smart toy svg; resolved relative to this module
const URL_SMARTTOY = new URL('../../assets/icons/smartToy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smart toy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartToy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartToyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMARTTOY }, ...properties);
}

/**
 * Creates a smart toy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartToyIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartToyIcon(element, ...properties);
    return element;
}
