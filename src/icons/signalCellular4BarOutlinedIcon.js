import { initIcon } from "./icon.js";

//the url of the signal cellular4 bar outlined svg; resolved relative to this module
const URL_SIGNALCELLULAR4BAROUTLINED = new URL('../../assets/icons/signalCellular4BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular4 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular4BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular4BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULAR4BAROUTLINED }, ...properties);
}

/**
 * Creates a signal cellular4 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular4BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular4BarOutlinedIcon(element, ...properties);
    return element;
}
