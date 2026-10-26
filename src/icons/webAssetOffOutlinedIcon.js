import { initIcon } from "./icon.js";

//the url of the web asset off outlined svg; resolved relative to this module
const URL_WEBASSETOFFOUTLINED = new URL('../../assets/icons/webAssetOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web asset off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webAssetOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebAssetOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WEBASSETOFFOUTLINED }, ...properties);
}

/**
 * Creates a web asset off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webAssetOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWebAssetOffOutlinedIcon(element, ...properties);
    return element;
}
