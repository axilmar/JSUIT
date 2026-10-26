import { initIcon } from "./icon.js";

//the url of the exposure outlined svg; resolved relative to this module
const URL_EXPOSUREOUTLINED = new URL('../../assets/icons/exposureOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an exposure outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/exposureOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExposureOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPOSUREOUTLINED }, ...properties);
}

/**
 * Creates an exposure outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const exposureOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExposureOutlinedIcon(element, ...properties);
    return element;
}
