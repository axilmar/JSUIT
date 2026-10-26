import { initIcon } from "./icon.js";

//the url of the settings overscan svg; resolved relative to this module
const URL_SETTINGSOVERSCAN = new URL('../../assets/icons/settingsOverscan.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings overscan icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsOverscan.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsOverscanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSOVERSCAN }, ...properties);
}

/**
 * Creates a settings overscan icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsOverscanIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsOverscanIcon(element, ...properties);
    return element;
}
