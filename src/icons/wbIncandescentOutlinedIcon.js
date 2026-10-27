import { initIcon } from "./icon.js";

//the url of the wb incandescent outlined svg; resolved relative to this module
const URL_WBINCANDESCENTOUTLINED = new URL('../../assets/icons/wbIncandescentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb incandescent outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbIncandescentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbIncandescentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wbIncandescentOutlinedIcon', url: URL_WBINCANDESCENTOUTLINED }, ...properties);
}

/**
 * Creates a wb incandescent outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbIncandescentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWbIncandescentOutlinedIcon(element, ...properties);
    return element;
}
