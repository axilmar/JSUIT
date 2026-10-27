import { initIcon } from "./icon.js";

//the url of the arrow downward outlined svg; resolved relative to this module
const URL_ARROWDOWNWARDOUTLINED = new URL('../../assets/icons/arrowDownwardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow downward outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowDownwardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowDownwardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowDownwardOutlinedIcon', url: URL_ARROWDOWNWARDOUTLINED }, ...properties);
}

/**
 * Creates an arrow downward outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowDownwardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowDownwardOutlinedIcon(element, ...properties);
    return element;
}
