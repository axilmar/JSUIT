import { initIcon } from "./icon.js";

//the url of the settings input composite outlined svg; resolved relative to this module
const URL_SETTINGSINPUTCOMPOSITEOUTLINED = new URL('../../assets/icons/settingsInputCompositeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings input composite outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsInputCompositeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsInputCompositeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSINPUTCOMPOSITEOUTLINED }, ...properties);
}

/**
 * Creates a settings input composite outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsInputCompositeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsInputCompositeOutlinedIcon(element, ...properties);
    return element;
}
