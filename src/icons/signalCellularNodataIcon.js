import { initIcon } from "./icon.js";

//the url of the signal cellular nodata svg; resolved relative to this module
const URL_SIGNALCELLULARNODATA = new URL('../../assets/icons/signalCellularNodata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular nodata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularNodata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularNodataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARNODATA }, ...properties);
}

/**
 * Creates a signal cellular nodata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularNodataIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularNodataIcon(element, ...properties);
    return element;
}
