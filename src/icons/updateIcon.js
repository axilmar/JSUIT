import { initIcon } from "./icon.js";

//the url of the update svg; resolved relative to this module
const URL_UPDATE = new URL('../../assets/icons/update.svg', import.meta.url).href;

/**
 * Initializes an icon element as an update icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/update.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpdateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'updateIcon', url: URL_UPDATE }, ...properties);
}

/**
 * Creates an update icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const updateIcon = (...properties) => {
    const element = document.createElement('div');
    initUpdateIcon(element, ...properties);
    return element;
}
