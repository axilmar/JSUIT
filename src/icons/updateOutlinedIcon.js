import { initIcon } from "./icon.js";

//the url of the update outlined svg; resolved relative to this module
const URL_UPDATEOUTLINED = new URL('../../assets/icons/updateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an update outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/updateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpdateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UPDATEOUTLINED }, ...properties);
}

/**
 * Creates an update outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const updateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUpdateOutlinedIcon(element, ...properties);
    return element;
}
