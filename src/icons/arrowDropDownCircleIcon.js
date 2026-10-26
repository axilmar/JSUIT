import { initIcon } from "./icon.js";

//the url of the arrow drop down circle svg; resolved relative to this module
const URL_ARROWDROPDOWNCIRCLE = new URL('../../assets/icons/arrowDropDownCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow drop down circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowDropDownCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowDropDownCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWDROPDOWNCIRCLE }, ...properties);
}

/**
 * Creates an arrow drop down circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowDropDownCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowDropDownCircleIcon(element, ...properties);
    return element;
}
