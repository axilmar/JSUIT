import { initIcon } from "./icon.js";

//the url of the shape line outlined svg; resolved relative to this module
const URL_SHAPELINEOUTLINED = new URL('../../assets/icons/shapeLineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shape line outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shapeLineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShapeLineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHAPELINEOUTLINED }, ...properties);
}

/**
 * Creates a shape line outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shapeLineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShapeLineOutlinedIcon(element, ...properties);
    return element;
}
