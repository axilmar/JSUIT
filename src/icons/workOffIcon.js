import { initIcon } from "./icon.js";

//the url of the work off svg; resolved relative to this module
const URL_WORKOFF = new URL('../../assets/icons/workOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WORKOFF }, ...properties);
}

/**
 * Creates a work off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workOffIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkOffIcon(element, ...properties);
    return element;
}
