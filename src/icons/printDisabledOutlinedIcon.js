import { initIcon } from "./icon.js";

//the url of the print disabled outlined svg; resolved relative to this module
const URL_PRINTDISABLEDOUTLINED = new URL('../../assets/icons/printDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a print disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/printDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrintDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRINTDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a print disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const printDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPrintDisabledOutlinedIcon(element, ...properties);
    return element;
}
