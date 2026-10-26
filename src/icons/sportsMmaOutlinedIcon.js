import { initIcon } from "./icon.js";

//the url of the sports mma outlined svg; resolved relative to this module
const URL_SPORTSMMAOUTLINED = new URL('../../assets/icons/sportsMmaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports mma outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsMmaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsMmaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSMMAOUTLINED }, ...properties);
}

/**
 * Creates a sports mma outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsMmaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsMmaOutlinedIcon(element, ...properties);
    return element;
}
