import { initIcon } from "./icon.js";

//the url of the sports volleyball outlined svg; resolved relative to this module
const URL_SPORTSVOLLEYBALLOUTLINED = new URL('../../assets/icons/sportsVolleyballOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports volleyball outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsVolleyballOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsVolleyballOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsVolleyballOutlinedIcon', url: URL_SPORTSVOLLEYBALLOUTLINED }, ...properties);
}

/**
 * Creates a sports volleyball outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsVolleyballOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsVolleyballOutlinedIcon(element, ...properties);
    return element;
}
