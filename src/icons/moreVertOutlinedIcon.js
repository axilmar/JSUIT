import { initIcon } from "./icon.js";

//the url of the more vert outlined svg; resolved relative to this module
const URL_MOREVERTOUTLINED = new URL('../../assets/icons/moreVertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a more vert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moreVertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoreVertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOREVERTOUTLINED }, ...properties);
}

/**
 * Creates a more vert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moreVertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoreVertOutlinedIcon(element, ...properties);
    return element;
}
