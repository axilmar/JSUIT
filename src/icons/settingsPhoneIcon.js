import { initIcon } from "./icon.js";

//the url of the settings phone svg; resolved relative to this module
const URL_SETTINGSPHONE = new URL('../../assets/icons/settingsPhone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings phone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsPhone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsPhoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsPhoneIcon', url: URL_SETTINGSPHONE }, ...properties);
}

/**
 * Creates a settings phone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsPhoneIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsPhoneIcon(element, ...properties);
    return element;
}
