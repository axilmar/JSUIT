import { initIcon } from "./icon.js";

//the url of the back hand outlined svg; resolved relative to this module
const URL_BACKHANDOUTLINED = new URL('../../assets/icons/backHandOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a back hand outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backHandOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackHandOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'backHandOutlinedIcon', url: URL_BACKHANDOUTLINED }, ...properties);
}

/**
 * Creates a back hand outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backHandOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBackHandOutlinedIcon(element, ...properties);
    return element;
}
