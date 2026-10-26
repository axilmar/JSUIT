import { initIcon } from "./icon.js";

//the url of the app shortcut outlined svg; resolved relative to this module
const URL_APPSHORTCUTOUTLINED = new URL('../../assets/icons/appShortcutOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an app shortcut outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appShortcutOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppShortcutOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APPSHORTCUTOUTLINED }, ...properties);
}

/**
 * Creates an app shortcut outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appShortcutOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAppShortcutOutlinedIcon(element, ...properties);
    return element;
}
