import { initIcon } from "./icon.js";

//the url of the settings voice outlined svg; resolved relative to this module
const URL_SETTINGSVOICEOUTLINED = new URL('../../assets/icons/settingsVoiceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings voice outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsVoiceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsVoiceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSVOICEOUTLINED }, ...properties);
}

/**
 * Creates a settings voice outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsVoiceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsVoiceOutlinedIcon(element, ...properties);
    return element;
}
