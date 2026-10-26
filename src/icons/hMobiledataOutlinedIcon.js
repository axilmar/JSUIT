import { initIcon } from "./icon.js";

//the url of the h mobiledata outlined svg; resolved relative to this module
const URL_HMOBILEDATAOUTLINED = new URL('../../assets/icons/hMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a h mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a h mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHMobiledataOutlinedIcon(element, ...properties);
    return element;
}
