import { initIcon } from "./icon.js";

//the url of the manage search outlined svg; resolved relative to this module
const URL_MANAGESEARCHOUTLINED = new URL('../../assets/icons/manageSearchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a manage search outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/manageSearchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManageSearchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'manageSearchOutlinedIcon', url: URL_MANAGESEARCHOUTLINED }, ...properties);
}

/**
 * Creates a manage search outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manageSearchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initManageSearchOutlinedIcon(element, ...properties);
    return element;
}
