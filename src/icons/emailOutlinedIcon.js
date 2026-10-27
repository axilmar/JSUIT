import { initIcon } from "./icon.js";

//the url of the email outlined svg; resolved relative to this module
const URL_EMAILOUTLINED = new URL('../../assets/icons/emailOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an email outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emailOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmailOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emailOutlinedIcon', url: URL_EMAILOUTLINED }, ...properties);
}

/**
 * Creates an email outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emailOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmailOutlinedIcon(element, ...properties);
    return element;
}
