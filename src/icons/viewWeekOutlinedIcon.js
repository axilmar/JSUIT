import { initIcon } from "./icon.js";

//the url of the view week outlined svg; resolved relative to this module
const URL_VIEWWEEKOUTLINED = new URL('../../assets/icons/viewWeekOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view week outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewWeekOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewWeekOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWWEEKOUTLINED }, ...properties);
}

/**
 * Creates a view week outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewWeekOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewWeekOutlinedIcon(element, ...properties);
    return element;
}
