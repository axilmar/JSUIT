import { initIcon } from "./icon.js";

//the url of the signal cellular3 bar outlined svg; resolved relative to this module
const URL_SIGNALCELLULAR3BAROUTLINED = new URL('../../assets/icons/signalCellular3BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular3 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular3BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular3BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalCellular3BarOutlinedIcon', url: URL_SIGNALCELLULAR3BAROUTLINED }, ...properties);
}

/**
 * Creates a signal cellular3 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular3BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular3BarOutlinedIcon(element, ...properties);
    return element;
}
