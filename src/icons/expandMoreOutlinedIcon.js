import { initIcon } from "./icon.js";

//the url of the expand more outlined svg; resolved relative to this module
const URL_EXPANDMOREOUTLINED = new URL('../../assets/icons/expandMoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand more outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expandMoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandMoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPANDMOREOUTLINED }, ...properties);
}

/**
 * Creates an expand more outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandMoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandMoreOutlinedIcon(element, ...properties);
    return element;
}
