import { initIcon } from "./icon.js";

//the url of the find in page outlined svg; resolved relative to this module
const URL_FINDINPAGEOUTLINED = new URL('../../assets/icons/findInPageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a find in page outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/findInPageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFindInPageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'findInPageOutlinedIcon', url: URL_FINDINPAGEOUTLINED }, ...properties);
}

/**
 * Creates a find in page outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const findInPageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFindInPageOutlinedIcon(element, ...properties);
    return element;
}
