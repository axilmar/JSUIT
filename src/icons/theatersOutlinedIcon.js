import { initIcon } from "./icon.js";

//the url of the theaters outlined svg; resolved relative to this module
const URL_THEATERSOUTLINED = new URL('../../assets/icons/theatersOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a theaters outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/theatersOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTheatersOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THEATERSOUTLINED }, ...properties);
}

/**
 * Creates a theaters outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const theatersOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTheatersOutlinedIcon(element, ...properties);
    return element;
}
