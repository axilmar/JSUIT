import { initIcon } from "./icon.js";

//the url of the beach access outlined svg; resolved relative to this module
const URL_BEACHACCESSOUTLINED = new URL('../../assets/icons/beachAccessOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a beach access outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/beachAccessOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBeachAccessOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEACHACCESSOUTLINED }, ...properties);
}

/**
 * Creates a beach access outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const beachAccessOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBeachAccessOutlinedIcon(element, ...properties);
    return element;
}
