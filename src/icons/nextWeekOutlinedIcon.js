import { initIcon } from "./icon.js";

//the url of the next week outlined svg; resolved relative to this module
const URL_NEXTWEEKOUTLINED = new URL('../../assets/icons/nextWeekOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a next week outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nextWeekOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNextWeekOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEXTWEEKOUTLINED }, ...properties);
}

/**
 * Creates a next week outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nextWeekOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNextWeekOutlinedIcon(element, ...properties);
    return element;
}
