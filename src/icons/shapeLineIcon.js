import { initIcon } from "./icon.js";

//the url of the shape line svg; resolved relative to this module
const URL_SHAPELINE = new URL('../../assets/icons/shapeLine.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shape line icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shapeLine.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShapeLineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHAPELINE }, ...properties);
}

/**
 * Creates a shape line icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shapeLineIcon = (...properties) => {
    const element = document.createElement('div');
    initShapeLineIcon(element, ...properties);
    return element;
}
