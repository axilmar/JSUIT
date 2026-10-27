import { initIcon } from "./icon.js";

//the url of the admin panel settings svg; resolved relative to this module
const URL_ADMINPANELSETTINGS = new URL('../../assets/icons/adminPanelSettings.svg', import.meta.url).href;

/**
 * Initializes an icon element as an admin panel settings icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adminPanelSettings.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdminPanelSettingsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'adminPanelSettingsIcon', url: URL_ADMINPANELSETTINGS }, ...properties);
}

/**
 * Creates an admin panel settings icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adminPanelSettingsIcon = (...properties) => {
    const element = document.createElement('div');
    initAdminPanelSettingsIcon(element, ...properties);
    return element;
}
