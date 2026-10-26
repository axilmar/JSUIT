import { initIcon } from "./icon.js";

//the url of the arrow drop down outlined svg; resolved relative to this module
const URL_ARROWDROPDOWNOUTLINED = new URL('../../assets/icons/arrowDropDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow drop down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowDropDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowDropDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWDROPDOWNOUTLINED }, ...properties);
}

/**
 * Creates an arrow drop down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowDropDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowDropDownOutlinedIcon(element, ...properties);
    return element;
}
