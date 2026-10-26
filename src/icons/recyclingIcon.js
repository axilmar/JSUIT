import { initIcon } from "./icon.js";

//the url of the recycling svg; resolved relative to this module
const URL_RECYCLING = new URL('../../assets/icons/recycling.svg', import.meta.url).href;

/**
 * Initializes an icon element as a recycling icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recycling.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecyclingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RECYCLING }, ...properties);
}

/**
 * Creates a recycling icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recyclingIcon = (...properties) => {
    const element = document.createElement('div');
    initRecyclingIcon(element, ...properties);
    return element;
}
