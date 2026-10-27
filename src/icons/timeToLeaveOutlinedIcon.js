import { initIcon } from "./icon.js";

//the url of the time to leave outlined svg; resolved relative to this module
const URL_TIMETOLEAVEOUTLINED = new URL('../../assets/icons/timeToLeaveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a time to leave outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timeToLeaveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimeToLeaveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timeToLeaveOutlinedIcon', url: URL_TIMETOLEAVEOUTLINED }, ...properties);
}

/**
 * Creates a time to leave outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timeToLeaveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimeToLeaveOutlinedIcon(element, ...properties);
    return element;
}
