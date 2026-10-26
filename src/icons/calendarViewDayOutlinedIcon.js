import { initIcon } from "./icon.js";

//the url of the calendar view day outlined svg; resolved relative to this module
const URL_CALENDARVIEWDAYOUTLINED = new URL('../../assets/icons/calendarViewDayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar view day outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarViewDayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarViewDayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALENDARVIEWDAYOUTLINED }, ...properties);
}

/**
 * Creates a calendar view day outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarViewDayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarViewDayOutlinedIcon(element, ...properties);
    return element;
}
