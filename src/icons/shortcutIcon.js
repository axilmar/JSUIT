import { initIcon } from "./icon.js";

//the url of the shortcut svg; resolved relative to this module
const URL_SHORTCUT = new URL('../../assets/icons/shortcut.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shortcut icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shortcut.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShortcutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shortcutIcon', url: URL_SHORTCUT }, ...properties);
}

/**
 * Creates a shortcut icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shortcutIcon = (...properties) => {
    const element = document.createElement('div');
    initShortcutIcon(element, ...properties);
    return element;
}
