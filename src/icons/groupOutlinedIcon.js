import { initIcon } from "./icon.js";

//the url of the group outlined svg; resolved relative to this module
const URL_GROUPOUTLINED = new URL('../../assets/icons/groupOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a group outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groupOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroupOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'groupOutlinedIcon', url: URL_GROUPOUTLINED }, ...properties);
}

/**
 * Creates a group outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groupOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGroupOutlinedIcon(element, ...properties);
    return element;
}
