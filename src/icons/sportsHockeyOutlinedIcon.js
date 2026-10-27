import { initIcon } from "./icon.js";

//the url of the sports hockey outlined svg; resolved relative to this module
const URL_SPORTSHOCKEYOUTLINED = new URL('../../assets/icons/sportsHockeyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports hockey outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsHockeyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsHockeyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsHockeyOutlinedIcon', url: URL_SPORTSHOCKEYOUTLINED }, ...properties);
}

/**
 * Creates a sports hockey outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsHockeyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsHockeyOutlinedIcon(element, ...properties);
    return element;
}
