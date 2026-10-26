import { initIcon } from "./icon.js";

//the url of the settings cell svg; resolved relative to this module
const URL_SETTINGSCELL = new URL('../../assets/icons/settingsCell.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings cell icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsCell.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsCellIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSCELL }, ...properties);
}

/**
 * Creates a settings cell icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsCellIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsCellIcon(element, ...properties);
    return element;
}
