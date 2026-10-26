import { initIcon } from "./icon.js";

//the url of the not interested outlined svg; resolved relative to this module
const URL_NOTINTERESTEDOUTLINED = new URL('../../assets/icons/notInterestedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a not interested outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notInterestedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotInterestedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTINTERESTEDOUTLINED }, ...properties);
}

/**
 * Creates a not interested outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notInterestedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotInterestedOutlinedIcon(element, ...properties);
    return element;
}
