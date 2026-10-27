import { initIcon } from "./icon.js";

//the url of the accessible outlined svg; resolved relative to this module
const URL_ACCESSIBLEOUTLINED = new URL('../../assets/icons/accessibleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an accessible outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessibleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessibleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessibleOutlinedIcon', url: URL_ACCESSIBLEOUTLINED }, ...properties);
}

/**
 * Creates an accessible outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessibleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessibleOutlinedIcon(element, ...properties);
    return element;
}
