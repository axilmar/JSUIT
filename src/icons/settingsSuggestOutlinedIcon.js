import { initIcon } from "./icon.js";

//the url of the settings suggest outlined svg; resolved relative to this module
const URL_SETTINGSSUGGESTOUTLINED = new URL('../../assets/icons/settingsSuggestOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a settings suggest outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/settingsSuggestOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSettingsSuggestOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'settingsSuggestOutlinedIcon', url: URL_SETTINGSSUGGESTOUTLINED }, ...properties);
}

/**
 * Creates a settings suggest outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const settingsSuggestOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSettingsSuggestOutlinedIcon(element, ...properties);
    return element;
}
