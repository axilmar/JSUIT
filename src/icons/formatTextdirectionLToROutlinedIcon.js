import { initIcon } from "./icon.js";

//the url of the format textdirection l to r outlined svg; resolved relative to this module
const URL_FORMATTEXTDIRECTIONLTOROUTLINED = new URL('../../assets/icons/formatTextdirectionLToROutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format textdirection l to r outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatTextdirectionLToROutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatTextdirectionLToROutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATTEXTDIRECTIONLTOROUTLINED }, ...properties);
}

/**
 * Creates a format textdirection l to r outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatTextdirectionLToROutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatTextdirectionLToROutlinedIcon(element, ...properties);
    return element;
}
