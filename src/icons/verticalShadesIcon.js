import { initIcon } from "./icon.js";

//the url of the vertical shades svg; resolved relative to this module
const URL_VERTICALSHADES = new URL('../../assets/icons/verticalShades.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical shades icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalShades.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalShadesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VERTICALSHADES }, ...properties);
}

/**
 * Creates a vertical shades icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalShadesIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalShadesIcon(element, ...properties);
    return element;
}
