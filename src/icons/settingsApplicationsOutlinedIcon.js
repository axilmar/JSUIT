import { initIcon } from "./icon.js";

//the url of the settings applications outlined svg; resolved relative to this module
const URL_SETTINGSAPPLICATIONSOUTLINED = new URL('../../assets/icons/settingsApplicationsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings applications outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsApplicationsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsApplicationsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSAPPLICATIONSOUTLINED }, ...properties);
}

/**
 * Creates a settings applications outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsApplicationsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsApplicationsOutlinedIcon(element, ...properties);
    return element;
}
