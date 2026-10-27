import { initIcon } from "./icon.js";

//the url of the app shortcut svg; resolved relative to this module
const URL_APPSHORTCUT = new URL('../../assets/icons/appShortcut.svg', import.meta.url).href;

/**
 * Initializes an icon element as an app shortcut icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appShortcut.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppShortcutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'appShortcutIcon', url: URL_APPSHORTCUT }, ...properties);
}

/**
 * Creates an app shortcut icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appShortcutIcon = (...properties) => {
    const element = document.createElement('div');
    initAppShortcutIcon(element, ...properties);
    return element;
}
