import { initIcon } from "./icon.js";

//the url of the upcoming svg; resolved relative to this module
const URL_UPCOMING = new URL('../../assets/icons/upcoming.svg', import.meta.url).href;

/**
 * Initializes an icon element as an upcoming icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/upcoming.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpcomingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'upcomingIcon', url: URL_UPCOMING }, ...properties);
}

/**
 * Creates an upcoming icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const upcomingIcon = (...properties) => {
    const element = document.createElement('div');
    initUpcomingIcon(element, ...properties);
    return element;
}
