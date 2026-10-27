import { initIcon } from "./icon.js";

//the url of the format paint outlined svg; resolved relative to this module
const URL_FORMATPAINTOUTLINED = new URL('../../assets/icons/formatPaintOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format paint outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatPaintOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatPaintOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatPaintOutlinedIcon', url: URL_FORMATPAINTOUTLINED }, ...properties);
}

/**
 * Creates a format paint outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatPaintOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatPaintOutlinedIcon(element, ...properties);
    return element;
}
