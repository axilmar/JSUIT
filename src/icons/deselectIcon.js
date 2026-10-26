import { initIcon } from "./icon.js";

//the url of the deselect svg; resolved relative to this module
const URL_DESELECT = new URL('../../assets/icons/deselect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a deselect icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deselect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeselectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DESELECT }, ...properties);
}

/**
 * Creates a deselect icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deselectIcon = (...properties) => {
    const element = document.createElement('div');
    initDeselectIcon(element, ...properties);
    return element;
}
