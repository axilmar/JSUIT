import { initIcon } from "./icon.js";

//the url of the schedule outlined svg; resolved relative to this module
const URL_SCHEDULEOUTLINED = new URL('../../assets/icons/scheduleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a schedule outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scheduleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScheduleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'scheduleOutlinedIcon', url: URL_SCHEDULEOUTLINED }, ...properties);
}

/**
 * Creates a schedule outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scheduleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScheduleOutlinedIcon(element, ...properties);
    return element;
}
