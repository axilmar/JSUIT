import { initIcon } from "./icon.js";

//the url of the desktop windows svg; resolved relative to this module
const URL_DESKTOPWINDOWS = new URL('../../assets/icons/desktopWindows.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desktop windows icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/desktopWindows.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesktopWindowsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'desktopWindowsIcon', url: URL_DESKTOPWINDOWS }, ...properties);
}

/**
 * Creates a desktop windows icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const desktopWindowsIcon = (...properties) => {
    const element = document.createElement('div');
    initDesktopWindowsIcon(element, ...properties);
    return element;
}
