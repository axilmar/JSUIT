import { initIcon } from "./icon.js";

//the url of the error outlined svg; resolved relative to this module
const URL_ERROROUTLINED = new URL('../../assets/icons/errorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an error outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/errorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initErrorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'errorOutlinedIcon', url: URL_ERROROUTLINED }, ...properties);
}

/**
 * Creates an error outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const errorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initErrorOutlinedIcon(element, ...properties);
    return element;
}
