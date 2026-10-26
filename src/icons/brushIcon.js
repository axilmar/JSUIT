import { initIcon } from "./icon.js";

//the url of the brush svg; resolved relative to this module
const URL_BRUSH = new URL('../../assets/icons/brush.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brush icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brush.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrushIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRUSH }, ...properties);
}

/**
 * Creates a brush icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brushIcon = (...properties) => {
    const element = document.createElement('div');
    initBrushIcon(element, ...properties);
    return element;
}
