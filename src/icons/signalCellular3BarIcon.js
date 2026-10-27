import { initIcon } from "./icon.js";

//the url of the signal cellular3 bar svg; resolved relative to this module
const URL_SIGNALCELLULAR3BAR = new URL('../../assets/icons/signalCellular3Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular3 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular3Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular3BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellular3BarIcon', url: URL_SIGNALCELLULAR3BAR }, ...properties);
}

/**
 * Creates a signal cellular3 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular3BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular3BarIcon(element, ...properties);
    return element;
}
