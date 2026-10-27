import { initIcon } from "./icon.js";

//the url of the sports handball outlined svg; resolved relative to this module
const URL_SPORTSHANDBALLOUTLINED = new URL('../../assets/icons/sportsHandballOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports handball outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsHandballOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsHandballOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsHandballOutlinedIcon', url: URL_SPORTSHANDBALLOUTLINED }, ...properties);
}

/**
 * Creates a sports handball outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsHandballOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsHandballOutlinedIcon(element, ...properties);
    return element;
}
