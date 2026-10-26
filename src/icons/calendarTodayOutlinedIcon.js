import { initIcon } from "./icon.js";

//the url of the calendar today outlined svg; resolved relative to this module
const URL_CALENDARTODAYOUTLINED = new URL('../../assets/icons/calendarTodayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calendar today outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calendarTodayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalendarTodayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALENDARTODAYOUTLINED }, ...properties);
}

/**
 * Creates a calendar today outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calendarTodayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCalendarTodayOutlinedIcon(element, ...properties);
    return element;
}
