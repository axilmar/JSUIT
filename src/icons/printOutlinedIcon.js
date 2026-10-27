import { initIcon } from "./icon.js";

//the url of the print outlined svg; resolved relative to this module
const URL_PRINTOUTLINED = new URL('../../assets/icons/printOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a print outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/printOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrintOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'printOutlinedIcon', url: URL_PRINTOUTLINED }, ...properties);
}

/**
 * Creates a print outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const printOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPrintOutlinedIcon(element, ...properties);
    return element;
}
