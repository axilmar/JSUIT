import { initIcon } from "./icon.js";

//the url of the settings svg; resolved relative to this module
const URL_SETTINGS = new URL('../../assets/icons/settings.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settings.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGS }, ...properties);
}

/**
 * Creates a settings icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsIcon(element, ...properties);
    return element;
}
