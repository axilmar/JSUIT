import { initIcon } from "./icon.js";

//the url of the signal cellular1 bar outlined svg; resolved relative to this module
const URL_SIGNALCELLULAR1BAROUTLINED = new URL('../../assets/icons/signalCellular1BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular1 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular1BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular1BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellular1BarOutlinedIcon', url: URL_SIGNALCELLULAR1BAROUTLINED }, ...properties);
}

/**
 * Creates a signal cellular1 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular1BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular1BarOutlinedIcon(element, ...properties);
    return element;
}
