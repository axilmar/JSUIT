import { initIcon } from "./icon.js";

//the url of the cottage outlined svg; resolved relative to this module
const URL_COTTAGEOUTLINED = new URL('../../assets/icons/cottageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cottage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cottageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCottageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COTTAGEOUTLINED }, ...properties);
}

/**
 * Creates a cottage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cottageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCottageOutlinedIcon(element, ...properties);
    return element;
}
