import { initIcon } from "./icon.js";

//the url of the settings brightness outlined svg; resolved relative to this module
const URL_SETTINGSBRIGHTNESSOUTLINED = new URL('../../assets/icons/settingsBrightnessOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings brightness outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsBrightnessOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsBrightnessOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSBRIGHTNESSOUTLINED }, ...properties);
}

/**
 * Creates a settings brightness outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsBrightnessOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsBrightnessOutlinedIcon(element, ...properties);
    return element;
}
