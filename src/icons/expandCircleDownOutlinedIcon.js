import { initIcon } from "./icon.js";

//the url of the expand circle down outlined svg; resolved relative to this module
const URL_EXPANDCIRCLEDOWNOUTLINED = new URL('../../assets/icons/expandCircleDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand circle down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expandCircleDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandCircleDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPANDCIRCLEDOWNOUTLINED }, ...properties);
}

/**
 * Creates an expand circle down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandCircleDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandCircleDownOutlinedIcon(element, ...properties);
    return element;
}
