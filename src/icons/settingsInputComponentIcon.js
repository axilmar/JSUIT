import { initIcon } from "./icon.js";

//the url of the settings input component svg; resolved relative to this module
const URL_SETTINGSINPUTCOMPONENT = new URL('../../assets/icons/settingsInputComponent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input component icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputComponent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputComponentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsInputComponentIcon', url: URL_SETTINGSINPUTCOMPONENT }, ...properties);
}

/**
 * Creates a settings input component icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputComponentIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputComponentIcon(element, ...properties);
    return element;
}
