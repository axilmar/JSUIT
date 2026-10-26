import { initIcon } from "./icon.js";

//the url of the signal wifi bad outlined svg; resolved relative to this module
const URL_SIGNALWIFIBADOUTLINED = new URL('../../assets/icons/signalWifiBadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi bad outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiBadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiBadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALWIFIBADOUTLINED }, ...properties);
}

/**
 * Creates a signal wifi bad outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiBadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiBadOutlinedIcon(element, ...properties);
    return element;
}
