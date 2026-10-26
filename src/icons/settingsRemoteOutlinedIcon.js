import { initIcon } from "./icon.js";

//the url of the settings remote outlined svg; resolved relative to this module
const URL_SETTINGSREMOTEOUTLINED = new URL('../../assets/icons/settingsRemoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings remote outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsRemoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsRemoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSREMOTEOUTLINED }, ...properties);
}

/**
 * Creates a settings remote outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsRemoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsRemoteOutlinedIcon(element, ...properties);
    return element;
}
