import { initIcon } from "./icon.js";

//the url of the signal cellular alt1 bar outlined svg; resolved relative to this module
const URL_SIGNALCELLULARALT1BAROUTLINED = new URL('../../assets/icons/signalCellularAlt1BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular alt1 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularAlt1BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularAlt1BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARALT1BAROUTLINED }, ...properties);
}

/**
 * Creates a signal cellular alt1 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularAlt1BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularAlt1BarOutlinedIcon(element, ...properties);
    return element;
}
