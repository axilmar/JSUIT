import { initIcon } from "./icon.js";

//the url of the offline bolt outlined svg; resolved relative to this module
const URL_OFFLINEBOLTOUTLINED = new URL('../../assets/icons/offlineBoltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an offline bolt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/offlineBoltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOfflineBoltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'offlineBoltOutlinedIcon', url: URL_OFFLINEBOLTOUTLINED }, ...properties);
}

/**
 * Creates an offline bolt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const offlineBoltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOfflineBoltOutlinedIcon(element, ...properties);
    return element;
}
