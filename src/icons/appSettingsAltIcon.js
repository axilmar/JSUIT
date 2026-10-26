import { initIcon } from "./icon.js";

//the url of the app settings alt svg; resolved relative to this module
const URL_APPSETTINGSALT = new URL('../../assets/icons/appSettingsAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as an app settings alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appSettingsAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppSettingsAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APPSETTINGSALT }, ...properties);
}

/**
 * Creates an app settings alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appSettingsAltIcon = (...properties) => {
    const element = document.createElement('div');
    initAppSettingsAltIcon(element, ...properties);
    return element;
}
