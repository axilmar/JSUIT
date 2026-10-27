import { initIcon } from "./icon.js";

//the url of the surfing svg; resolved relative to this module
const URL_SURFING = new URL('../../assets/icons/surfing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a surfing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/surfing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSurfingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'surfingIcon', url: URL_SURFING }, ...properties);
}

/**
 * Creates a surfing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const surfingIcon = (...properties) => {
    const element = document.createElement('div');
    initSurfingIcon(element, ...properties);
    return element;
}
