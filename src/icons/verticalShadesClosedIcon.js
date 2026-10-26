import { initIcon } from "./icon.js";

//the url of the vertical shades closed svg; resolved relative to this module
const URL_VERTICALSHADESCLOSED = new URL('../../assets/icons/verticalShadesClosed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical shades closed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalShadesClosed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalShadesClosedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VERTICALSHADESCLOSED }, ...properties);
}

/**
 * Creates a vertical shades closed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalShadesClosedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalShadesClosedIcon(element, ...properties);
    return element;
}
