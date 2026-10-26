import { initIcon } from "./icon.js";

//the url of the closed caption off outlined svg; resolved relative to this module
const URL_CLOSEDCAPTIONOFFOUTLINED = new URL('../../assets/icons/closedCaptionOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a closed caption off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closedCaptionOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClosedCaptionOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOSEDCAPTIONOFFOUTLINED }, ...properties);
}

/**
 * Creates a closed caption off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closedCaptionOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initClosedCaptionOffOutlinedIcon(element, ...properties);
    return element;
}
