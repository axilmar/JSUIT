import { initIcon } from "./icon.js";

//the url of the format shapes svg; resolved relative to this module
const URL_FORMATSHAPES = new URL('../../assets/icons/formatShapes.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format shapes icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatShapes.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatShapesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATSHAPES }, ...properties);
}

/**
 * Creates a format shapes icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatShapesIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatShapesIcon(element, ...properties);
    return element;
}
