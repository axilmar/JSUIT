import { initIcon } from "./icon.js";

//the url of the settings overscan outlined svg; resolved relative to this module
const URL_SETTINGSOVERSCANOUTLINED = new URL('../../assets/icons/settingsOverscanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings overscan outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsOverscanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsOverscanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSOVERSCANOUTLINED }, ...properties);
}

/**
 * Creates a settings overscan outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsOverscanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsOverscanOutlinedIcon(element, ...properties);
    return element;
}
