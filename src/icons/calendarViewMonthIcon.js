import { initIcon } from "./icon.js";

//the url of the calendar view month svg; resolved relative to this module
const URL_CALENDARVIEWMONTH = new URL('../../assets/icons/calendarViewMonth.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar view month icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarViewMonth.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarViewMonthIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'calendarViewMonthIcon', url: URL_CALENDARVIEWMONTH }, ...properties);
}

/**
 * Creates a calendar view month icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarViewMonthIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarViewMonthIcon(element, ...properties);
    return element;
}
