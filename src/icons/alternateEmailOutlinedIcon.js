import { initIcon } from "./icon.js";

//the url of the alternate email outlined svg; resolved relative to this module
const URL_ALTERNATEEMAILOUTLINED = new URL('../../assets/icons/alternateEmailOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alternate email outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alternateEmailOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlternateEmailOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALTERNATEEMAILOUTLINED }, ...properties);
}

/**
 * Creates an alternate email outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alternateEmailOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlternateEmailOutlinedIcon(element, ...properties);
    return element;
}
