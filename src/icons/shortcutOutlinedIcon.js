import { initIcon } from "./icon.js";

//the url of the shortcut outlined svg; resolved relative to this module
const URL_SHORTCUTOUTLINED = new URL('../../assets/icons/shortcutOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shortcut outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shortcutOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShortcutOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHORTCUTOUTLINED }, ...properties);
}

/**
 * Creates a shortcut outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shortcutOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShortcutOutlinedIcon(element, ...properties);
    return element;
}
