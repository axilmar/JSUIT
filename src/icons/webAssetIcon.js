import { initIcon } from "./icon.js";

//the url of the web asset svg; resolved relative to this module
const URL_WEBASSET = new URL('../../assets/icons/webAsset.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web asset icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webAsset.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebAssetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webAssetIcon', url: URL_WEBASSET }, ...properties);
}

/**
 * Creates a web asset icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webAssetIcon = (...properties) => {
    const element = document.createElement('div');
    initWebAssetIcon(element, ...properties);
    return element;
}
