import { initIcon } from "./icon.js";

//the url of the sports basketball outlined svg; resolved relative to this module
const URL_SPORTSBASKETBALLOUTLINED = new URL('../../assets/icons/sportsBasketballOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports basketball outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsBasketballOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsBasketballOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSBASKETBALLOUTLINED }, ...properties);
}

/**
 * Creates a sports basketball outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsBasketballOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsBasketballOutlinedIcon(element, ...properties);
    return element;
}
