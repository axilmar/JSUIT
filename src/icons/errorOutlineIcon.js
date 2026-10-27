import { initIcon } from "./icon.js";

//the url of the error outline svg; resolved relative to this module
const URL_ERROROUTLINE = new URL('../../assets/icons/errorOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as an error outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/errorOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initErrorOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'errorOutlineIcon', url: URL_ERROROUTLINE }, ...properties);
}

/**
 * Creates an error outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const errorOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initErrorOutlineIcon(element, ...properties);
    return element;
}
