import { initIcon } from "./icon.js";

//the url of the insert link outlined svg; resolved relative to this module
const URL_INSERTLINKOUTLINED = new URL('../../assets/icons/insertLinkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert link outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertLinkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertLinkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSERTLINKOUTLINED }, ...properties);
}

/**
 * Creates an insert link outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertLinkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertLinkOutlinedIcon(element, ...properties);
    return element;
}
