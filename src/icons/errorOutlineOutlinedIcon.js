import { initIcon } from "./icon.js";

//the url of the error outline outlined svg; resolved relative to this module
const URL_ERROROUTLINEOUTLINED = new URL('../../assets/icons/errorOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an error outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/errorOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initErrorOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'errorOutlineOutlinedIcon', url: URL_ERROROUTLINEOUTLINED }, ...properties);
}

/**
 * Creates an error outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const errorOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initErrorOutlineOutlinedIcon(element, ...properties);
    return element;
}
