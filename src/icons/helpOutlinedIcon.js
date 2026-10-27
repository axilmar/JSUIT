import { initIcon } from "./icon.js";

//the url of the help outlined svg; resolved relative to this module
const URL_HELPOUTLINED = new URL('../../assets/icons/helpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a help outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/helpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHelpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'helpOutlinedIcon', url: URL_HELPOUTLINED }, ...properties);
}

/**
 * Creates a help outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const helpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHelpOutlinedIcon(element, ...properties);
    return element;
}
