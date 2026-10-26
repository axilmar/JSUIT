import { initIcon } from "./icon.js";

//the url of the settings accessibility svg; resolved relative to this module
const URL_SETTINGSACCESSIBILITY = new URL('../../assets/icons/settingsAccessibility.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings accessibility icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsAccessibility.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsAccessibilityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSACCESSIBILITY }, ...properties);
}

/**
 * Creates a settings accessibility icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsAccessibilityIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsAccessibilityIcon(element, ...properties);
    return element;
}
