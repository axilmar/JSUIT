import { initIcon } from "./icon.js";

//the url of the signal cellular0 bar outlined svg; resolved relative to this module
const URL_SIGNALCELLULAR0BAROUTLINED = new URL('../../assets/icons/signalCellular0BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular0 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellular0BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellular0BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULAR0BAROUTLINED }, ...properties);
}

/**
 * Creates a signal cellular0 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellular0BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellular0BarOutlinedIcon(element, ...properties);
    return element;
}
