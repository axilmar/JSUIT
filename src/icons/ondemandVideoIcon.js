import { initIcon } from "./icon.js";

//the url of the ondemand video svg; resolved relative to this module
const URL_ONDEMANDVIDEO = new URL('../../assets/icons/ondemandVideo.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ondemand video icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ondemandVideo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOndemandVideoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ONDEMANDVIDEO }, ...properties);
}

/**
 * Creates an ondemand video icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ondemandVideoIcon = (...properties) => {
    const element = document.createElement('div');
    initOndemandVideoIcon(element, ...properties);
    return element;
}
