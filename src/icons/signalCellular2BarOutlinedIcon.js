import { initIcon } from "./icon.js";

//the url of the signal cellular2 bar outlined svg; resolved relative to this module
const URL_SIGNALCELLULAR2BAROUTLINED = new URL('../../assets/icons/signalCellular2BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular2 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular2BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular2BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellular2BarOutlinedIcon', url: URL_SIGNALCELLULAR2BAROUTLINED }, ...properties);
}

/**
 * Creates a signal cellular2 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular2BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular2BarOutlinedIcon(element, ...properties);
    return element;
}
