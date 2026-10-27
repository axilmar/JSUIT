import { initIcon } from "./icon.js";

//the url of the border inner outlined svg; resolved relative to this module
const URL_BORDERINNEROUTLINED = new URL('../../assets/icons/borderInnerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border inner outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderInnerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderInnerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderInnerOutlinedIcon', url: URL_BORDERINNEROUTLINED }, ...properties);
}

/**
 * Creates a border inner outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderInnerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderInnerOutlinedIcon(element, ...properties);
    return element;
}
