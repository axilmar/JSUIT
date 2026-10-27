import { initIcon } from "./icon.js";

//the url of the first page outlined svg; resolved relative to this module
const URL_FIRSTPAGEOUTLINED = new URL('../../assets/icons/firstPageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a first page outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/firstPageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFirstPageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'firstPageOutlinedIcon', url: URL_FIRSTPAGEOUTLINED }, ...properties);
}

/**
 * Creates a first page outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const firstPageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFirstPageOutlinedIcon(element, ...properties);
    return element;
}
