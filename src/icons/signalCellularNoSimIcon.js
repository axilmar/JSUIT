import { initIcon } from "./icon.js";

//the url of the signal cellular no sim svg; resolved relative to this module
const URL_SIGNALCELLULARNOSIM = new URL('../../assets/icons/signalCellularNoSim.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular no sim icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularNoSim.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularNoSimIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellularNoSimIcon', url: URL_SIGNALCELLULARNOSIM }, ...properties);
}

/**
 * Creates a signal cellular no sim icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularNoSimIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularNoSimIcon(element, ...properties);
    return element;
}
