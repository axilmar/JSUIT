import { initIcon } from "./icon.js";

//the url of the print disabled svg; resolved relative to this module
const URL_PRINTDISABLED = new URL('../../assets/icons/printDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a print disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/printDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrintDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRINTDISABLED }, ...properties);
}

/**
 * Creates a print disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const printDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initPrintDisabledIcon(element, ...properties);
    return element;
}
