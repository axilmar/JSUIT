import { initIcon } from "./icon.js";

//the url of the sixty fps outlined svg; resolved relative to this module
const URL_SIXTYFPSOUTLINED = new URL('../../assets/icons/sixtyFpsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sixty fps outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixtyFpsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixtyFpsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sixtyFpsOutlinedIcon', url: URL_SIXTYFPSOUTLINED }, ...properties);
}

/**
 * Creates a sixty fps outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixtyFpsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSixtyFpsOutlinedIcon(element, ...properties);
    return element;
}
