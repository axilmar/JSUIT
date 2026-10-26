import { initIcon } from "./icon.js";

//the url of the interests outlined svg; resolved relative to this module
const URL_INTERESTSOUTLINED = new URL('../../assets/icons/interestsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an interests outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/interestsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInterestsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INTERESTSOUTLINED }, ...properties);
}

/**
 * Creates an interests outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const interestsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInterestsOutlinedIcon(element, ...properties);
    return element;
}
