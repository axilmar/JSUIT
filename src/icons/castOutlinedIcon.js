import { initIcon } from "./icon.js";

//the url of the cast outlined svg; resolved relative to this module
const URL_CASTOUTLINED = new URL('../../assets/icons/castOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cast outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/castOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CASTOUTLINED }, ...properties);
}

/**
 * Creates a cast outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCastOutlinedIcon(element, ...properties);
    return element;
}
