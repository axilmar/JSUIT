import { initIcon } from "./icon.js";

//the url of the settings input hdmi svg; resolved relative to this module
const URL_SETTINGSINPUTHDMI = new URL('../../assets/icons/settingsInputHdmi.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input hdmi icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputHdmi.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputHdmiIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsInputHdmiIcon', url: URL_SETTINGSINPUTHDMI }, ...properties);
}

/**
 * Creates a settings input hdmi icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputHdmiIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputHdmiIcon(element, ...properties);
    return element;
}
