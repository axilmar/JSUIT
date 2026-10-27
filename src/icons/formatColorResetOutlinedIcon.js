import { initIcon } from "./icon.js";

//the url of the format color reset outlined svg; resolved relative to this module
const URL_FORMATCOLORRESETOUTLINED = new URL('../../assets/icons/formatColorResetOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format color reset outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatColorResetOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatColorResetOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatColorResetOutlinedIcon', url: URL_FORMATCOLORRESETOUTLINED }, ...properties);
}

/**
 * Creates a format color reset outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatColorResetOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatColorResetOutlinedIcon(element, ...properties);
    return element;
}
