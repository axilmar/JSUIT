import { initIcon } from "./icon.js";

//the url of the settings system daydream outlined svg; resolved relative to this module
const URL_SETTINGSSYSTEMDAYDREAMOUTLINED = new URL('../../assets/icons/settingsSystemDaydreamOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings system daydream outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsSystemDaydreamOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsSystemDaydreamOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSSYSTEMDAYDREAMOUTLINED }, ...properties);
}

/**
 * Creates a settings system daydream outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsSystemDaydreamOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsSystemDaydreamOutlinedIcon(element, ...properties);
    return element;
}
