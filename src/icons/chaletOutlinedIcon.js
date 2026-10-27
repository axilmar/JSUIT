import { initIcon } from "./icon.js";

//the url of the chalet outlined svg; resolved relative to this module
const URL_CHALETOUTLINED = new URL('../../assets/icons/chaletOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chalet outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chaletOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChaletOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chaletOutlinedIcon', url: URL_CHALETOUTLINED }, ...properties);
}

/**
 * Creates a chalet outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chaletOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChaletOutlinedIcon(element, ...properties);
    return element;
}
