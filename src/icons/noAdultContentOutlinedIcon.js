import { initIcon } from "./icon.js";

//the url of the no adult content outlined svg; resolved relative to this module
const URL_NOADULTCONTENTOUTLINED = new URL('../../assets/icons/noAdultContentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no adult content outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noAdultContentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoAdultContentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOADULTCONTENTOUTLINED }, ...properties);
}

/**
 * Creates a no adult content outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noAdultContentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoAdultContentOutlinedIcon(element, ...properties);
    return element;
}
