import { initIcon } from "./icon.js";

//the url of the smart toy outlined svg; resolved relative to this module
const URL_SMARTTOYOUTLINED = new URL('../../assets/icons/smartToyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smart toy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartToyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartToyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMARTTOYOUTLINED }, ...properties);
}

/**
 * Creates a smart toy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartToyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartToyOutlinedIcon(element, ...properties);
    return element;
}
