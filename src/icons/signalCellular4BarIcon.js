import { initIcon } from "./icon.js";

//the url of the signal cellular4 bar svg; resolved relative to this module
const URL_SIGNALCELLULAR4BAR = new URL('../../assets/icons/signalCellular4Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular4 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular4Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular4BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellular4BarIcon', url: URL_SIGNALCELLULAR4BAR }, ...properties);
}

/**
 * Creates a signal cellular4 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular4BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular4BarIcon(element, ...properties);
    return element;
}
