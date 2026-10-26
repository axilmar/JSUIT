import { initIcon } from "./icon.js";

//the url of the web asset off svg; resolved relative to this module
const URL_WEBASSETOFF = new URL('../../assets/icons/webAssetOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web asset off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webAssetOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebAssetOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WEBASSETOFF }, ...properties);
}

/**
 * Creates a web asset off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webAssetOffIcon = (...properties) => {
    const element = document.createElement('div');
    initWebAssetOffIcon(element, ...properties);
    return element;
}
