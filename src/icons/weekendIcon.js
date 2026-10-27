import { initIcon } from "./icon.js";

//the url of the weekend svg; resolved relative to this module
const URL_WEEKEND = new URL('../../assets/icons/weekend.svg', import.meta.url).href;

/**
 * Initializes an icon element as a weekend icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/weekend.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWeekendIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'weekendIcon', url: URL_WEEKEND }, ...properties);
}

/**
 * Creates a weekend icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const weekendIcon = (...properties) => {
    const element = document.createElement('div');
    initWeekendIcon(element, ...properties);
    return element;
}
