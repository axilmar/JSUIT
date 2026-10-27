import { initIcon } from "./icon.js";

//the url of the flip to back svg; resolved relative to this module
const URL_FLIPTOBACK = new URL('../../assets/icons/flipToBack.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip to back icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipToBack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipToBackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flipToBackIcon', url: URL_FLIPTOBACK }, ...properties);
}

/**
 * Creates a flip to back icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipToBackIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipToBackIcon(element, ...properties);
    return element;
}
