import { initIcon } from "./icon.js";

//the url of the toggle off svg; resolved relative to this module
const URL_TOGGLEOFF = new URL('../../assets/icons/toggleOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toggle off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toggleOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToggleOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TOGGLEOFF }, ...properties);
}

/**
 * Creates a toggle off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toggleOffIcon = (...properties) => {
    const element = document.createElement('div');
    initToggleOffIcon(element, ...properties);
    return element;
}
