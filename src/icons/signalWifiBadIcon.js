import { initIcon } from "./icon.js";

//the url of the signal wifi bad svg; resolved relative to this module
const URL_SIGNALWIFIBAD = new URL('../../assets/icons/signalWifiBad.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi bad icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifiBad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifiBadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALWIFIBAD }, ...properties);
}

/**
 * Creates a signal wifi bad icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifiBadIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifiBadIcon(element, ...properties);
    return element;
}
