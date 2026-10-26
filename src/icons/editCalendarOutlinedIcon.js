import { initIcon } from "./icon.js";

//the url of the edit calendar outlined svg; resolved relative to this module
const URL_EDITCALENDAROUTLINED = new URL('../../assets/icons/editCalendarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit calendar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editCalendarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditCalendarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITCALENDAROUTLINED }, ...properties);
}

/**
 * Creates an edit calendar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editCalendarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditCalendarOutlinedIcon(element, ...properties);
    return element;
}
