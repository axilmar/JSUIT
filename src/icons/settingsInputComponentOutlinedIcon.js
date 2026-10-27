import { initIcon } from "./icon.js";

//the url of the settings input component outlined svg; resolved relative to this module
const URL_SETTINGSINPUTCOMPONENTOUTLINED = new URL('../../assets/icons/settingsInputComponentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input component outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputComponentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputComponentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsInputComponentOutlinedIcon', url: URL_SETTINGSINPUTCOMPONENTOUTLINED }, ...properties);
}

/**
 * Creates a settings input component outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputComponentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputComponentOutlinedIcon(element, ...properties);
    return element;
}
