import { initIcon } from "./icon.js";

//the url of the calendar view week outlined svg; resolved relative to this module
const URL_CALENDARVIEWWEEKOUTLINED = new URL('../../assets/icons/calendarViewWeekOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar view week outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarViewWeekOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarViewWeekOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'calendarViewWeekOutlinedIcon', url: URL_CALENDARVIEWWEEKOUTLINED }, ...properties);
}

/**
 * Creates a calendar view week outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarViewWeekOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarViewWeekOutlinedIcon(element, ...properties);
    return element;
}
