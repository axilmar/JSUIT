import { initIcon } from "./icon.js";

//the url of the sports golf outlined svg; resolved relative to this module
const URL_SPORTSGOLFOUTLINED = new URL('../../assets/icons/sportsGolfOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports golf outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsGolfOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsGolfOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsGolfOutlinedIcon', url: URL_SPORTSGOLFOUTLINED }, ...properties);
}

/**
 * Creates a sports golf outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsGolfOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsGolfOutlinedIcon(element, ...properties);
    return element;
}
