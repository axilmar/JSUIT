import { initIcon } from "./icon.js";

//the url of the signal cellular off svg; resolved relative to this module
const URL_SIGNALCELLULAROFF = new URL('../../assets/icons/signalCellularOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellularOffIcon', url: URL_SIGNALCELLULAROFF }, ...properties);
}

/**
 * Creates a signal cellular off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularOffIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularOffIcon(element, ...properties);
    return element;
}
