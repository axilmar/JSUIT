import { initIcon } from "./icon.js";

//the url of the cast connected outlined svg; resolved relative to this module
const URL_CASTCONNECTEDOUTLINED = new URL('../../assets/icons/castConnectedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cast connected outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/castConnectedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastConnectedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CASTCONNECTEDOUTLINED }, ...properties);
}

/**
 * Creates a cast connected outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castConnectedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCastConnectedOutlinedIcon(element, ...properties);
    return element;
}
