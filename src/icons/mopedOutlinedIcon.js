import { initIcon } from "./icon.js";

//the url of the moped outlined svg; resolved relative to this module
const URL_MOPEDOUTLINED = new URL('../../assets/icons/mopedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a moped outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mopedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMopedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOPEDOUTLINED }, ...properties);
}

/**
 * Creates a moped outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mopedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMopedOutlinedIcon(element, ...properties);
    return element;
}
