import { initIcon } from "./icon.js";

//the url of the perm contact calendar outlined svg; resolved relative to this module
const URL_PERMCONTACTCALENDAROUTLINED = new URL('../../assets/icons/permContactCalendarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm contact calendar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permContactCalendarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermContactCalendarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'permContactCalendarOutlinedIcon', url: URL_PERMCONTACTCALENDAROUTLINED }, ...properties);
}

/**
 * Creates a perm contact calendar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permContactCalendarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPermContactCalendarOutlinedIcon(element, ...properties);
    return element;
}
