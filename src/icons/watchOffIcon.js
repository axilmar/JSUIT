import { initIcon } from "./icon.js";

//the url of the watch off svg; resolved relative to this module
const URL_WATCHOFF = new URL('../../assets/icons/watchOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a watch off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/watchOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWatchOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'watchOffIcon', url: URL_WATCHOFF }, ...properties);
}

/**
 * Creates a watch off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const watchOffIcon = (...properties) => {
    const element = document.createElement('div');
    initWatchOffIcon(element, ...properties);
    return element;
}
