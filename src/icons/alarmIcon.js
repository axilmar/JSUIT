import { initIcon } from "./icon.js";

//the url of the alarm svg; resolved relative to this module
const URL_ALARM = new URL('../../assets/icons/alarm.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alarm icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alarm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlarmIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alarmIcon', url: URL_ALARM }, ...properties);
}

/**
 * Creates an alarm icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alarmIcon = (...properties) => {
    const element = document.createElement('div');
    initAlarmIcon(element, ...properties);
    return element;
}
