import { initIcon } from "./icon.js";

//the url of the thirty fps select svg; resolved relative to this module
const URL_THIRTYFPSSELECT = new URL('../../assets/icons/thirtyFpsSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thirty fps select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thirtyFpsSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThirtyFpsSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thirtyFpsSelectIcon', url: URL_THIRTYFPSSELECT }, ...properties);
}

/**
 * Creates a thirty fps select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thirtyFpsSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initThirtyFpsSelectIcon(element, ...properties);
    return element;
}
