import { initIcon } from "./icon.js";

//the url of the format underlined svg; resolved relative to this module
const URL_FORMATUNDERLINED = new URL('../../assets/icons/formatUnderlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format underlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatUnderlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatUnderlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatUnderlinedIcon', url: URL_FORMATUNDERLINED }, ...properties);
}

/**
 * Creates a format underlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatUnderlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatUnderlinedIcon(element, ...properties);
    return element;
}
