import { initIcon } from "./icon.js";

//the url of the read more outlined svg; resolved relative to this module
const URL_READMOREOUTLINED = new URL('../../assets/icons/readMoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a read more outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/readMoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReadMoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_READMOREOUTLINED }, ...properties);
}

/**
 * Creates a read more outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const readMoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReadMoreOutlinedIcon(element, ...properties);
    return element;
}
