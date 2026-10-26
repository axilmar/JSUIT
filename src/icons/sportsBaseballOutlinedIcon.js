import { initIcon } from "./icon.js";

//the url of the sports baseball outlined svg; resolved relative to this module
const URL_SPORTSBASEBALLOUTLINED = new URL('../../assets/icons/sportsBaseballOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports baseball outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsBaseballOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsBaseballOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSBASEBALLOUTLINED }, ...properties);
}

/**
 * Creates a sports baseball outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsBaseballOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsBaseballOutlinedIcon(element, ...properties);
    return element;
}
