import { initIcon } from "./icon.js";

//the url of the border style outlined svg; resolved relative to this module
const URL_BORDERSTYLEOUTLINED = new URL('../../assets/icons/borderStyleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border style outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderStyleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderStyleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderStyleOutlinedIcon', url: URL_BORDERSTYLEOUTLINED }, ...properties);
}

/**
 * Creates a border style outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderStyleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderStyleOutlinedIcon(element, ...properties);
    return element;
}
