import { initIcon } from "./icon.js";

//the url of the perm scan wifi outlined svg; resolved relative to this module
const URL_PERMSCANWIFIOUTLINED = new URL('../../assets/icons/permScanWifiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm scan wifi outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permScanWifiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermScanWifiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'permScanWifiOutlinedIcon', url: URL_PERMSCANWIFIOUTLINED }, ...properties);
}

/**
 * Creates a perm scan wifi outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permScanWifiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPermScanWifiOutlinedIcon(element, ...properties);
    return element;
}
