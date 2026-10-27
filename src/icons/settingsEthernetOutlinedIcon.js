import { initIcon } from "./icon.js";

//the url of the settings ethernet outlined svg; resolved relative to this module
const URL_SETTINGSETHERNETOUTLINED = new URL('../../assets/icons/settingsEthernetOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings ethernet outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsEthernetOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsEthernetOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsEthernetOutlinedIcon', url: URL_SETTINGSETHERNETOUTLINED }, ...properties);
}

/**
 * Creates a settings ethernet outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsEthernetOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsEthernetOutlinedIcon(element, ...properties);
    return element;
}
