import { initIcon } from "./icon.js";

//the url of the attach email outlined svg; resolved relative to this module
const URL_ATTACHEMAILOUTLINED = new URL('../../assets/icons/attachEmailOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attach email outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attachEmailOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttachEmailOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attachEmailOutlinedIcon', url: URL_ATTACHEMAILOUTLINED }, ...properties);
}

/**
 * Creates an attach email outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attachEmailOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAttachEmailOutlinedIcon(element, ...properties);
    return element;
}
