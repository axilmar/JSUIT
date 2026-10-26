import { initIcon } from "./icon.js";

//the url of the signal cellular0 bar svg; resolved relative to this module
const URL_SIGNALCELLULAR0BAR = new URL('../../assets/icons/signalCellular0Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular0 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular0Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular0BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULAR0BAR }, ...properties);
}

/**
 * Creates a signal cellular0 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular0BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular0BarIcon(element, ...properties);
    return element;
}
