import { initIcon } from "./icon.js";

//the url of the pool svg; resolved relative to this module
const URL_POOL = new URL('../../assets/icons/pool.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pool icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pool.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPoolIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'poolIcon', url: URL_POOL }, ...properties);
}

/**
 * Creates a pool icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const poolIcon = (...properties) => {
    const element = document.createElement('div');
    initPoolIcon(element, ...properties);
    return element;
}
