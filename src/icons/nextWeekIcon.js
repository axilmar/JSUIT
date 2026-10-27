import { initIcon } from "./icon.js";

//the url of the next week svg; resolved relative to this module
const URL_NEXTWEEK = new URL('../../assets/icons/nextWeek.svg', import.meta.url).href;

/**
 * Initializes an icon element as a next week icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nextWeek.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNextWeekIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nextWeekIcon', url: URL_NEXTWEEK }, ...properties);
}

/**
 * Creates a next week icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nextWeekIcon = (...properties) => {
    const element = document.createElement('div');
    initNextWeekIcon(element, ...properties);
    return element;
}
