import { initIcon } from "./icon.js";

//the url of the description svg; resolved relative to this module
const URL_DESCRIPTION = new URL('../../assets/icons/description.svg', import.meta.url).href;

/**
 * Initializes an icon element as a description icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/description.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDescriptionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DESCRIPTION }, ...properties);
}

/**
 * Creates a description icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const descriptionIcon = (...properties) => {
    const element = document.createElement('div');
    initDescriptionIcon(element, ...properties);
    return element;
}
