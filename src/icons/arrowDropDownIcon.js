import { initIcon } from "./icon.js";

//the url of the arrow drop down svg; resolved relative to this module
const URL_ARROWDROPDOWN = new URL('../../assets/icons/arrowDropDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow drop down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowDropDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowDropDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowDropDownIcon', url: URL_ARROWDROPDOWN }, ...properties);
}

/**
 * Creates an arrow drop down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowDropDownIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowDropDownIcon(element, ...properties);
    return element;
}
