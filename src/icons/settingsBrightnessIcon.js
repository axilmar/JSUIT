import { initIcon } from "./icon.js";

//the url of the settings brightness svg; resolved relative to this module
const URL_SETTINGSBRIGHTNESS = new URL('../../assets/icons/settingsBrightness.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings brightness icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsBrightness.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsBrightnessIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsBrightnessIcon', url: URL_SETTINGSBRIGHTNESS }, ...properties);
}

/**
 * Creates a settings brightness icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsBrightnessIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsBrightnessIcon(element, ...properties);
    return element;
}
