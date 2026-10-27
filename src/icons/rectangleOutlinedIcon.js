import { initIcon } from "./icon.js";

//the url of the rectangle outlined svg; resolved relative to this module
const URL_RECTANGLEOUTLINED = new URL('../../assets/icons/rectangleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rectangle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rectangleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRectangleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rectangleOutlinedIcon', url: URL_RECTANGLEOUTLINED }, ...properties);
}

/**
 * Creates a rectangle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rectangleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRectangleOutlinedIcon(element, ...properties);
    return element;
}
