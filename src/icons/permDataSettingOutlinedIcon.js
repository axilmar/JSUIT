import { initIcon } from "./icon.js";

//the url of the perm data setting outlined svg; resolved relative to this module
const URL_PERMDATASETTINGOUTLINED = new URL('../../assets/icons/permDataSettingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm data setting outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permDataSettingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermDataSettingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'permDataSettingOutlinedIcon', url: URL_PERMDATASETTINGOUTLINED }, ...properties);
}

/**
 * Creates a perm data setting outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permDataSettingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPermDataSettingOutlinedIcon(element, ...properties);
    return element;
}
