import { initIcon } from "./icon.js";

//the url of the settings remote svg; resolved relative to this module
const URL_SETTINGSREMOTE = new URL('../../assets/icons/settingsRemote.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings remote icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsRemote.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsRemoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSREMOTE }, ...properties);
}

/**
 * Creates a settings remote icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsRemoteIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsRemoteIcon(element, ...properties);
    return element;
}
