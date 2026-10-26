import { initIcon } from "./icon.js";

//the url of the sports football outlined svg; resolved relative to this module
const URL_SPORTSFOOTBALLOUTLINED = new URL('../../assets/icons/sportsFootballOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports football outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsFootballOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsFootballOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSFOOTBALLOUTLINED }, ...properties);
}

/**
 * Creates a sports football outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsFootballOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsFootballOutlinedIcon(element, ...properties);
    return element;
}
