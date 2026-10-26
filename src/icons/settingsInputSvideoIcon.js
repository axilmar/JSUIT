import { initIcon } from "./icon.js";

//the url of the settings input svideo svg; resolved relative to this module
const URL_SETTINGSINPUTSVIDEO = new URL('../../assets/icons/settingsInputSvideo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input svideo icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputSvideo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputSvideoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSINPUTSVIDEO }, ...properties);
}

/**
 * Creates a settings input svideo icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputSvideoIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputSvideoIcon(element, ...properties);
    return element;
}
