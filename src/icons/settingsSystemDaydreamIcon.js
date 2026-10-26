import { initIcon } from "./icon.js";

//the url of the settings system daydream svg; resolved relative to this module
const URL_SETTINGSSYSTEMDAYDREAM = new URL('../../assets/icons/settingsSystemDaydream.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings system daydream icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsSystemDaydream.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsSystemDaydreamIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSSYSTEMDAYDREAM }, ...properties);
}

/**
 * Creates a settings system daydream icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsSystemDaydreamIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsSystemDaydreamIcon(element, ...properties);
    return element;
}
