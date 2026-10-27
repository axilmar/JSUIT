import { initIcon } from "./icon.js";

//the url of the unpublished svg; resolved relative to this module
const URL_UNPUBLISHED = new URL('../../assets/icons/unpublished.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unpublished icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unpublished.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnpublishedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'unpublishedIcon', url: URL_UNPUBLISHED }, ...properties);
}

/**
 * Creates an unpublished icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unpublishedIcon = (...properties) => {
    const element = document.createElement('div');
    initUnpublishedIcon(element, ...properties);
    return element;
}
