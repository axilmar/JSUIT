import { initIcon } from "./icon.js";

//the url of the line axis outlined svg; resolved relative to this module
const URL_LINEAXISOUTLINED = new URL('../../assets/icons/lineAxisOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a line axis outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lineAxisOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLineAxisOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LINEAXISOUTLINED }, ...properties);
}

/**
 * Creates a line axis outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lineAxisOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLineAxisOutlinedIcon(element, ...properties);
    return element;
}
