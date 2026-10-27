import { initIcon } from "./icon.js";

//the url of the schedule svg; resolved relative to this module
const URL_SCHEDULE = new URL('../../assets/icons/schedule.svg', import.meta.url).href;

/**
 * Initializes an icon element as a schedule icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/schedule.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScheduleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'scheduleIcon', url: URL_SCHEDULE }, ...properties);
}

/**
 * Creates a schedule icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scheduleIcon = (...properties) => {
    const element = document.createElement('div');
    initScheduleIcon(element, ...properties);
    return element;
}
