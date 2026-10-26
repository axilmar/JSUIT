import { initIcon } from "./icon.js";

//the url of the newspaper outlined svg; resolved relative to this module
const URL_NEWSPAPEROUTLINED = new URL('../../assets/icons/newspaperOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a newspaper outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/newspaperOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNewspaperOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEWSPAPEROUTLINED }, ...properties);
}

/**
 * Creates a newspaper outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const newspaperOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNewspaperOutlinedIcon(element, ...properties);
    return element;
}
