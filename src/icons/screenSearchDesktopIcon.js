import { initIcon } from "./icon.js";

//the url of the screen search desktop svg; resolved relative to this module
const URL_SCREENSEARCHDESKTOP = new URL('../../assets/icons/screenSearchDesktop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen search desktop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenSearchDesktop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenSearchDesktopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENSEARCHDESKTOP }, ...properties);
}

/**
 * Creates a screen search desktop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenSearchDesktopIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenSearchDesktopIcon(element, ...properties);
    return element;
}
