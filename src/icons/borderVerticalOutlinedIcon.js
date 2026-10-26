import { initIcon } from "./icon.js";

//the url of the border vertical outlined svg; resolved relative to this module
const URL_BORDERVERTICALOUTLINED = new URL('../../assets/icons/borderVerticalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border vertical outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderVerticalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderVerticalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERVERTICALOUTLINED }, ...properties);
}

/**
 * Creates a border vertical outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderVerticalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderVerticalOutlinedIcon(element, ...properties);
    return element;
}
