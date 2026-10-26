import { initIcon } from "./icon.js";

//the url of the ice skating outlined svg; resolved relative to this module
const URL_ICESKATINGOUTLINED = new URL('../../assets/icons/iceSkatingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ice skating outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/iceSkatingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIceSkatingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ICESKATINGOUTLINED }, ...properties);
}

/**
 * Creates an ice skating outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const iceSkatingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initIceSkatingOutlinedIcon(element, ...properties);
    return element;
}
