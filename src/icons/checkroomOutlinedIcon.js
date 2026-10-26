import { initIcon } from "./icon.js";

//the url of the checkroom outlined svg; resolved relative to this module
const URL_CHECKROOMOUTLINED = new URL('../../assets/icons/checkroomOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a checkroom outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkroomOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckroomOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHECKROOMOUTLINED }, ...properties);
}

/**
 * Creates a checkroom outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkroomOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckroomOutlinedIcon(element, ...properties);
    return element;
}
