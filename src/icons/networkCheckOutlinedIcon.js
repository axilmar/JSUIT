import { initIcon } from "./icon.js";

//the url of the network check outlined svg; resolved relative to this module
const URL_NETWORKCHECKOUTLINED = new URL('../../assets/icons/networkCheckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network check outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkCheckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkCheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkCheckOutlinedIcon', url: URL_NETWORKCHECKOUTLINED }, ...properties);
}

/**
 * Creates a network check outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkCheckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkCheckOutlinedIcon(element, ...properties);
    return element;
}
