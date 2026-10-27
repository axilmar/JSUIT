import { initIcon } from "./icon.js";

//the url of the expand circle down svg; resolved relative to this module
const URL_EXPANDCIRCLEDOWN = new URL('../../assets/icons/expandCircleDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand circle down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expandCircleDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandCircleDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'expandCircleDownIcon', url: URL_EXPANDCIRCLEDOWN }, ...properties);
}

/**
 * Creates an expand circle down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandCircleDownIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandCircleDownIcon(element, ...properties);
    return element;
}
