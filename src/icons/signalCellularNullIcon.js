import { initIcon } from "./icon.js";

//the url of the signal cellular null svg; resolved relative to this module
const URL_SIGNALCELLULARNULL = new URL('../../assets/icons/signalCellularNull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular null icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularNull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularNullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARNULL }, ...properties);
}

/**
 * Creates a signal cellular null icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularNullIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularNullIcon(element, ...properties);
    return element;
}
