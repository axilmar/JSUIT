import { initIcon } from "./icon.js";

//the url of the settings power outlined svg; resolved relative to this module
const URL_SETTINGSPOWEROUTLINED = new URL('../../assets/icons/settingsPowerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings power outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsPowerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsPowerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SETTINGSPOWEROUTLINED }, ...properties);
}

/**
 * Creates a settings power outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsPowerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsPowerOutlinedIcon(element, ...properties);
    return element;
}
