import { initIcon } from "./icon.js";

//the url of the settings applications svg; resolved relative to this module
const URL_SETTINGSAPPLICATIONS = new URL('../../assets/icons/settingsApplications.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings applications icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsApplications.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsApplicationsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsApplicationsIcon', url: URL_SETTINGSAPPLICATIONS }, ...properties);
}

/**
 * Creates a settings applications icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsApplicationsIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsApplicationsIcon(element, ...properties);
    return element;
}
