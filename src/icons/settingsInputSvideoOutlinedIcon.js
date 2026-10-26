import { initIcon } from "./icon.js";

//the url of the settings input svideo outlined svg; resolved relative to this module
const URL_SETTINGSINPUTSVIDEOOUTLINED = new URL('../../assets/icons/settingsInputSvideoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input svideo outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputSvideoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputSvideoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSINPUTSVIDEOOUTLINED }, ...properties);
}

/**
 * Creates a settings input svideo outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputSvideoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputSvideoOutlinedIcon(element, ...properties);
    return element;
}
