import { initIcon } from "./icon.js";

//the url of the arrow circle up svg; resolved relative to this module
const URL_ARROWCIRCLEUP = new URL('../../assets/icons/arrowCircleUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow circle up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowCircleUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowCircleUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowCircleUpIcon', url: URL_ARROWCIRCLEUP }, ...properties);
}

/**
 * Creates an arrow circle up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowCircleUpIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowCircleUpIcon(element, ...properties);
    return element;
}
