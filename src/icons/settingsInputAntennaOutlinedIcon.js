import { initIcon } from "./icon.js";

//the url of the settings input antenna outlined svg; resolved relative to this module
const URL_SETTINGSINPUTANTENNAOUTLINED = new URL('../../assets/icons/settingsInputAntennaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input antenna outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputAntennaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputAntennaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSINPUTANTENNAOUTLINED }, ...properties);
}

/**
 * Creates a settings input antenna outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputAntennaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputAntennaOutlinedIcon(element, ...properties);
    return element;
}
