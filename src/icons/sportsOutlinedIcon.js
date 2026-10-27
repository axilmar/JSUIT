import { initIcon } from "./icon.js";

//the url of the sports outlined svg; resolved relative to this module
const URL_SPORTSOUTLINED = new URL('../../assets/icons/sportsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsOutlinedIcon', url: URL_SPORTSOUTLINED }, ...properties);
}

/**
 * Creates a sports outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsOutlinedIcon(element, ...properties);
    return element;
}
