import { initIcon } from "./icon.js";

//the url of the desktop windows outlined svg; resolved relative to this module
const URL_DESKTOPWINDOWSOUTLINED = new URL('../../assets/icons/desktopWindowsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desktop windows outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/desktopWindowsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesktopWindowsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'desktopWindowsOutlinedIcon', url: URL_DESKTOPWINDOWSOUTLINED }, ...properties);
}

/**
 * Creates a desktop windows outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const desktopWindowsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDesktopWindowsOutlinedIcon(element, ...properties);
    return element;
}
