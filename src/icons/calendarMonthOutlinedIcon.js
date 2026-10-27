import { initIcon } from "./icon.js";

//the url of the calendar month outlined svg; resolved relative to this module
const URL_CALENDARMONTHOUTLINED = new URL('../../assets/icons/calendarMonthOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar month outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarMonthOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarMonthOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'calendarMonthOutlinedIcon', url: URL_CALENDARMONTHOUTLINED }, ...properties);
}

/**
 * Creates a calendar month outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarMonthOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarMonthOutlinedIcon(element, ...properties);
    return element;
}
