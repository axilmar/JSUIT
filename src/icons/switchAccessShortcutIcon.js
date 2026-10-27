import { initIcon } from "./icon.js";

//the url of the switch access shortcut svg; resolved relative to this module
const URL_SWITCHACCESSSHORTCUT = new URL('../../assets/icons/switchAccessShortcut.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch access shortcut icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchAccessShortcut.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchAccessShortcutIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchAccessShortcutIcon', url: URL_SWITCHACCESSSHORTCUT }, ...properties);
}

/**
 * Creates a switch access shortcut icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchAccessShortcutIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchAccessShortcutIcon(element, ...properties);
    return element;
}
