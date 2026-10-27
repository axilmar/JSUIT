import { initIcon } from "./icon.js";

//the url of the settings accessibility outlined svg; resolved relative to this module
const URL_SETTINGSACCESSIBILITYOUTLINED = new URL('../../assets/icons/settingsAccessibilityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings accessibility outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsAccessibilityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsAccessibilityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsAccessibilityOutlinedIcon', url: URL_SETTINGSACCESSIBILITYOUTLINED }, ...properties);
}

/**
 * Creates a settings accessibility outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsAccessibilityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsAccessibilityOutlinedIcon(element, ...properties);
    return element;
}
