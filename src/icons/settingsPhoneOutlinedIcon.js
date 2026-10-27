import { initIcon } from "./icon.js";

//the url of the settings phone outlined svg; resolved relative to this module
const URL_SETTINGSPHONEOUTLINED = new URL('../../assets/icons/settingsPhoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings phone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsPhoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsPhoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsPhoneOutlinedIcon', url: URL_SETTINGSPHONEOUTLINED }, ...properties);
}

/**
 * Creates a settings phone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsPhoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsPhoneOutlinedIcon(element, ...properties);
    return element;
}
