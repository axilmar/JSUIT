import { initIcon } from "./icon.js";

//the url of the nature outlined svg; resolved relative to this module
const URL_NATUREOUTLINED = new URL('../../assets/icons/natureOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nature outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/natureOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNatureOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'natureOutlinedIcon', url: URL_NATUREOUTLINED }, ...properties);
}

/**
 * Creates a nature outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const natureOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNatureOutlinedIcon(element, ...properties);
    return element;
}
