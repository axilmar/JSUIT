import { initIcon } from "./icon.js";

//the url of the pages outlined svg; resolved relative to this module
const URL_PAGESOUTLINED = new URL('../../assets/icons/pagesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pages outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pagesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPagesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pagesOutlinedIcon', url: URL_PAGESOUTLINED }, ...properties);
}

/**
 * Creates a pages outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pagesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPagesOutlinedIcon(element, ...properties);
    return element;
}
