import { initIcon } from "./icon.js";

//the url of the wb iridescent outlined svg; resolved relative to this module
const URL_WBIRIDESCENTOUTLINED = new URL('../../assets/icons/wbIridescentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb iridescent outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbIridescentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbIridescentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WBIRIDESCENTOUTLINED }, ...properties);
}

/**
 * Creates a wb iridescent outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbIridescentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWbIridescentOutlinedIcon(element, ...properties);
    return element;
}
