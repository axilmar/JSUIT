import { initIcon } from "./icon.js";

//the url of the calendar view month outlined svg; resolved relative to this module
const URL_CALENDARVIEWMONTHOUTLINED = new URL('../../assets/icons/calendarViewMonthOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar view month outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarViewMonthOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarViewMonthOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALENDARVIEWMONTHOUTLINED }, ...properties);
}

/**
 * Creates a calendar view month outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarViewMonthOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarViewMonthOutlinedIcon(element, ...properties);
    return element;
}
