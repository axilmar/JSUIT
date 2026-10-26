import { initIcon } from "./icon.js";

//the url of the format overline outlined svg; resolved relative to this module
const URL_FORMATOVERLINEOUTLINED = new URL('../../assets/icons/formatOverlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format overline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatOverlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatOverlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATOVERLINEOUTLINED }, ...properties);
}

/**
 * Creates a format overline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatOverlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatOverlineOutlinedIcon(element, ...properties);
    return element;
}
