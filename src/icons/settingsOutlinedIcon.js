import { initIcon } from "./icon.js";

//the url of the settings outlined svg; resolved relative to this module
const URL_SETTINGSOUTLINED = new URL('../../assets/icons/settingsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSOUTLINED }, ...properties);
}

/**
 * Creates a settings outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsOutlinedIcon(element, ...properties);
    return element;
}
