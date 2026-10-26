import { initIcon } from "./icon.js";

//the url of the signal cellular null outlined svg; resolved relative to this module
const URL_SIGNALCELLULARNULLOUTLINED = new URL('../../assets/icons/signalCellularNullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular null outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularNullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularNullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARNULLOUTLINED }, ...properties);
}

/**
 * Creates a signal cellular null outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularNullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularNullOutlinedIcon(element, ...properties);
    return element;
}
