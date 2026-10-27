import { initIcon } from "./icon.js";

//the url of the switch access shortcut add svg; resolved relative to this module
const URL_SWITCHACCESSSHORTCUTADD = new URL('../../assets/icons/switchAccessShortcutAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch access shortcut add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchAccessShortcutAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchAccessShortcutAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchAccessShortcutAddIcon', url: URL_SWITCHACCESSSHORTCUTADD }, ...properties);
}

/**
 * Creates a switch access shortcut add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchAccessShortcutAddIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchAccessShortcutAddIcon(element, ...properties);
    return element;
}
