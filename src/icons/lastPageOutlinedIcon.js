import { initIcon } from "./icon.js";

//the url of the last page outlined svg; resolved relative to this module
const URL_LASTPAGEOUTLINED = new URL('../../assets/icons/lastPageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a last page outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lastPageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLastPageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LASTPAGEOUTLINED }, ...properties);
}

/**
 * Creates a last page outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lastPageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLastPageOutlinedIcon(element, ...properties);
    return element;
}
