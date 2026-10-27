import { initIcon } from "./icon.js";

//the url of the arrow right svg; resolved relative to this module
const URL_ARROWRIGHT = new URL('../../assets/icons/arrowRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowRightIcon', url: URL_ARROWRIGHT }, ...properties);
}

/**
 * Creates an arrow right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowRightIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowRightIcon(element, ...properties);
    return element;
}
