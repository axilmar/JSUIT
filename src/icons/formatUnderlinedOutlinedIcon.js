import { initIcon } from "./icon.js";

//the url of the format underlined outlined svg; resolved relative to this module
const URL_FORMATUNDERLINEDOUTLINED = new URL('../../assets/icons/formatUnderlinedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format underlined outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatUnderlinedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatUnderlinedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATUNDERLINEDOUTLINED }, ...properties);
}

/**
 * Creates a format underlined outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatUnderlinedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatUnderlinedOutlinedIcon(element, ...properties);
    return element;
}
