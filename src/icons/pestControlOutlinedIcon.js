import { initIcon } from "./icon.js";

//the url of the pest control outlined svg; resolved relative to this module
const URL_PESTCONTROLOUTLINED = new URL('../../assets/icons/pestControlOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pest control outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pestControlOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPestControlOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pestControlOutlinedIcon', url: URL_PESTCONTROLOUTLINED }, ...properties);
}

/**
 * Creates a pest control outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pestControlOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPestControlOutlinedIcon(element, ...properties);
    return element;
}
