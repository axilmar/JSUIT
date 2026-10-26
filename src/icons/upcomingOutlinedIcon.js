import { initIcon } from "./icon.js";

//the url of the upcoming outlined svg; resolved relative to this module
const URL_UPCOMINGOUTLINED = new URL('../../assets/icons/upcomingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an upcoming outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/upcomingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUpcomingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UPCOMINGOUTLINED }, ...properties);
}

/**
 * Creates an upcoming outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const upcomingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUpcomingOutlinedIcon(element, ...properties);
    return element;
}
