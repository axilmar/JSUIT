import { initIcon } from "./icon.js";

//the url of the settings cell outlined svg; resolved relative to this module
const URL_SETTINGSCELLOUTLINED = new URL('../../assets/icons/settingsCellOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings cell outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsCellOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsCellOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsCellOutlinedIcon', url: URL_SETTINGSCELLOUTLINED }, ...properties);
}

/**
 * Creates a settings cell outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsCellOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsCellOutlinedIcon(element, ...properties);
    return element;
}
