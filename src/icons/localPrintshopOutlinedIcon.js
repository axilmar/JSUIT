import { initIcon } from "./icon.js";

//the url of the local printshop outlined svg; resolved relative to this module
const URL_LOCALPRINTSHOPOUTLINED = new URL('../../assets/icons/localPrintshopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local printshop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPrintshopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPrintshopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALPRINTSHOPOUTLINED }, ...properties);
}

/**
 * Creates a local printshop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPrintshopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPrintshopOutlinedIcon(element, ...properties);
    return element;
}
