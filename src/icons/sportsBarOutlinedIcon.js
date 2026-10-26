import { initIcon } from "./icon.js";

//the url of the sports bar outlined svg; resolved relative to this module
const URL_SPORTSBAROUTLINED = new URL('../../assets/icons/sportsBarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsBarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsBarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSBAROUTLINED }, ...properties);
}

/**
 * Creates a sports bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsBarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsBarOutlinedIcon(element, ...properties);
    return element;
}
