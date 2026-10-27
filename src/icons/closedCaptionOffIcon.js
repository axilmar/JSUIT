import { initIcon } from "./icon.js";

//the url of the closed caption off svg; resolved relative to this module
const URL_CLOSEDCAPTIONOFF = new URL('../../assets/icons/closedCaptionOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a closed caption off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closedCaptionOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClosedCaptionOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'closedCaptionOffIcon', url: URL_CLOSEDCAPTIONOFF }, ...properties);
}

/**
 * Creates a closed caption off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closedCaptionOffIcon = (...properties) => {
    const element = document.createElement('div');
    initClosedCaptionOffIcon(element, ...properties);
    return element;
}
