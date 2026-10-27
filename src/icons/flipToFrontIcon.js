import { initIcon } from "./icon.js";

//the url of the flip to front svg; resolved relative to this module
const URL_FLIPTOFRONT = new URL('../../assets/icons/flipToFront.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip to front icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipToFront.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipToFrontIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flipToFrontIcon', url: URL_FLIPTOFRONT }, ...properties);
}

/**
 * Creates a flip to front icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipToFrontIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipToFrontIcon(element, ...properties);
    return element;
}
