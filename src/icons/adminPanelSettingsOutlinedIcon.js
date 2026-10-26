import { initIcon } from "./icon.js";

//the url of the admin panel settings outlined svg; resolved relative to this module
const URL_ADMINPANELSETTINGSOUTLINED = new URL('../../assets/icons/adminPanelSettingsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an admin panel settings outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adminPanelSettingsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdminPanelSettingsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADMINPANELSETTINGSOUTLINED }, ...properties);
}

/**
 * Creates an admin panel settings outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adminPanelSettingsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAdminPanelSettingsOutlinedIcon(element, ...properties);
    return element;
}
