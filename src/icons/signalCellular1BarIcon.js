import { initIcon } from "./icon.js";

//the url of the signal cellular1 bar svg; resolved relative to this module
const URL_SIGNALCELLULAR1BAR = new URL('../../assets/icons/signalCellular1Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular1 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular1Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular1BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellular1BarIcon', url: URL_SIGNALCELLULAR1BAR }, ...properties);
}

/**
 * Creates a signal cellular1 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular1BarIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular1BarIcon(element, ...properties);
    return element;
}
