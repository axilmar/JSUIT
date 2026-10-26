import { initIcon } from "./icon.js";

//the url of the settings suggest svg; resolved relative to this module
const URL_SETTINGSSUGGEST = new URL('../../assets/icons/settingsSuggest.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings suggest icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsSuggest.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsSuggestIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSSUGGEST }, ...properties);
}

/**
 * Creates a settings suggest icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsSuggestIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsSuggestIcon(element, ...properties);
    return element;
}
