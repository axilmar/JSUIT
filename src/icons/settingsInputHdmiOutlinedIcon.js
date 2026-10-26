import { initIcon } from "./icon.js";

//the url of the settings input hdmi outlined svg; resolved relative to this module
const URL_SETTINGSINPUTHDMIOUTLINED = new URL('../../assets/icons/settingsInputHdmiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input hdmi outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputHdmiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputHdmiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSINPUTHDMIOUTLINED }, ...properties);
}

/**
 * Creates a settings input hdmi outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputHdmiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputHdmiOutlinedIcon(element, ...properties);
    return element;
}
