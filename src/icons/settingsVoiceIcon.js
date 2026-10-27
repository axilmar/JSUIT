import { initIcon } from "./icon.js";

//the url of the settings voice svg; resolved relative to this module
const URL_SETTINGSVOICE = new URL('../../assets/icons/settingsVoice.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings voice icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsVoice.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsVoiceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsVoiceIcon', url: URL_SETTINGSVOICE }, ...properties);
}

/**
 * Creates a settings voice icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsVoiceIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsVoiceIcon(element, ...properties);
    return element;
}
