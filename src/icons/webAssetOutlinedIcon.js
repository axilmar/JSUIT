import { initIcon } from "./icon.js";

//the url of the web asset outlined svg; resolved relative to this module
const URL_WEBASSETOUTLINED = new URL('../../assets/icons/webAssetOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web asset outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webAssetOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebAssetOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webAssetOutlinedIcon', url: URL_WEBASSETOUTLINED }, ...properties);
}

/**
 * Creates a web asset outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webAssetOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWebAssetOutlinedIcon(element, ...properties);
    return element;
}
