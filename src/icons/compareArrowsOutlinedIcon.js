import { initIcon } from "./icon.js";

//the url of the compare arrows outlined svg; resolved relative to this module
const URL_COMPAREARROWSOUTLINED = new URL('../../assets/icons/compareArrowsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compare arrows outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compareArrowsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompareArrowsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMPAREARROWSOUTLINED }, ...properties);
}

/**
 * Creates a compare arrows outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compareArrowsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCompareArrowsOutlinedIcon(element, ...properties);
    return element;
}
