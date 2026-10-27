import { initIcon } from "./icon.js";

//the url of the sledding svg; resolved relative to this module
const URL_SLEDDING = new URL('../../assets/icons/sledding.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sledding icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sledding.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSleddingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sleddingIcon', url: URL_SLEDDING }, ...properties);
}

/**
 * Creates a sledding icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sleddingIcon = (...properties) => {
    const element = document.createElement('div');
    initSleddingIcon(element, ...properties);
    return element;
}
