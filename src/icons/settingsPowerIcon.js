import { initIcon } from "./icon.js";

//the url of the settings power svg; resolved relative to this module
const URL_SETTINGSPOWER = new URL('../../assets/icons/settingsPower.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings power icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsPower.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsPowerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsPowerIcon', url: URL_SETTINGSPOWER }, ...properties);
}

/**
 * Creates a settings power icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsPowerIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsPowerIcon(element, ...properties);
    return element;
}
