import { initIcon } from "./icon.js";

//the url of the width wide svg; resolved relative to this module
const URL_WIDTHWIDE = new URL('../../assets/icons/widthWide.svg', import.meta.url).href;

/**
 * Initializes an icon element as a width wide icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widthWide.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidthWideIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'widthWideIcon', url: URL_WIDTHWIDE }, ...properties);
}

/**
 * Creates a width wide icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widthWideIcon = (...properties) => {
    const element = document.createElement('div');
    initWidthWideIcon(element, ...properties);
    return element;
}
