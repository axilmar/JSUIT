import { initIcon } from "./icon.js";

//the url of the perm data setting svg; resolved relative to this module
const URL_PERMDATASETTING = new URL('../../assets/icons/permDataSetting.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm data setting icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permDataSetting.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermDataSettingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERMDATASETTING }, ...properties);
}

/**
 * Creates a perm data setting icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permDataSettingIcon = (...properties) => {
    const element = document.createElement('div');
    initPermDataSettingIcon(element, ...properties);
    return element;
}
