import { initIcon } from "./icon.js";

//the url of the stroller svg; resolved relative to this module
const URL_STROLLER = new URL('../../assets/icons/stroller.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stroller icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stroller.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStrollerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'strollerIcon', url: URL_STROLLER }, ...properties);
}

/**
 * Creates a stroller icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const strollerIcon = (...properties) => {
    const element = document.createElement('div');
    initStrollerIcon(element, ...properties);
    return element;
}
