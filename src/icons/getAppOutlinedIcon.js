import { initIcon } from "./icon.js";

//the url of the get app outlined svg; resolved relative to this module
const URL_GETAPPOUTLINED = new URL('../../assets/icons/getAppOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a get app outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/getAppOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGetAppOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GETAPPOUTLINED }, ...properties);
}

/**
 * Creates a get app outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const getAppOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGetAppOutlinedIcon(element, ...properties);
    return element;
}
