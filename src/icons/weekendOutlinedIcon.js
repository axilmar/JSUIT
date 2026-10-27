import { initIcon } from "./icon.js";

//the url of the weekend outlined svg; resolved relative to this module
const URL_WEEKENDOUTLINED = new URL('../../assets/icons/weekendOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a weekend outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/weekendOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWeekendOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'weekendOutlinedIcon', url: URL_WEEKENDOUTLINED }, ...properties);
}

/**
 * Creates a weekend outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const weekendOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWeekendOutlinedIcon(element, ...properties);
    return element;
}
