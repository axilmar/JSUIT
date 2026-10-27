import { initIcon } from "./icon.js";

//the url of the desktop mac outlined svg; resolved relative to this module
const URL_DESKTOPMACOUTLINED = new URL('../../assets/icons/desktopMacOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desktop mac outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/desktopMacOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesktopMacOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'desktopMacOutlinedIcon', url: URL_DESKTOPMACOUTLINED }, ...properties);
}

/**
 * Creates a desktop mac outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const desktopMacOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDesktopMacOutlinedIcon(element, ...properties);
    return element;
}
