import { initIcon } from "./icon.js";

//the url of the sports cricket outlined svg; resolved relative to this module
const URL_SPORTSCRICKETOUTLINED = new URL('../../assets/icons/sportsCricketOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports cricket outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsCricketOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsCricketOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPORTSCRICKETOUTLINED }, ...properties);
}

/**
 * Creates a sports cricket outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsCricketOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsCricketOutlinedIcon(element, ...properties);
    return element;
}
