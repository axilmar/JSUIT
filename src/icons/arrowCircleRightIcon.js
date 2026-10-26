import { initIcon } from "./icon.js";

//the url of the arrow circle right svg; resolved relative to this module
const URL_ARROWCIRCLERIGHT = new URL('../../assets/icons/arrowCircleRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow circle right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowCircleRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowCircleRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWCIRCLERIGHT }, ...properties);
}

/**
 * Creates an arrow circle right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowCircleRightIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowCircleRightIcon(element, ...properties);
    return element;
}
