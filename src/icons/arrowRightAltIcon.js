import { initIcon } from "./icon.js";

//the url of the arrow right alt svg; resolved relative to this module
const URL_ARROWRIGHTALT = new URL('../../assets/icons/arrowRightAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow right alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowRightAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowRightAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowRightAltIcon', url: URL_ARROWRIGHTALT }, ...properties);
}

/**
 * Creates an arrow right alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowRightAltIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowRightAltIcon(element, ...properties);
    return element;
}
