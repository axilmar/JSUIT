import { initIcon } from "./icon.js";

//the url of the wb sunny outlined svg; resolved relative to this module
const URL_WBSUNNYOUTLINED = new URL('../../assets/icons/wbSunnyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb sunny outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbSunnyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbSunnyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WBSUNNYOUTLINED }, ...properties);
}

/**
 * Creates a wb sunny outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbSunnyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWbSunnyOutlinedIcon(element, ...properties);
    return element;
}
