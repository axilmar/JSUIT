import { initIcon } from "./icon.js";

//the url of the closed caption outlined svg; resolved relative to this module
const URL_CLOSEDCAPTIONOUTLINED = new URL('../../assets/icons/closedCaptionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a closed caption outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closedCaptionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClosedCaptionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOSEDCAPTIONOUTLINED }, ...properties);
}

/**
 * Creates a closed caption outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closedCaptionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initClosedCaptionOutlinedIcon(element, ...properties);
    return element;
}
