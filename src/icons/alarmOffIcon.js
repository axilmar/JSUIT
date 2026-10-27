import { initIcon } from "./icon.js";

//the url of the alarm off svg; resolved relative to this module
const URL_ALARMOFF = new URL('../../assets/icons/alarmOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alarm off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alarmOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlarmOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alarmOffIcon', url: URL_ALARMOFF }, ...properties);
}

/**
 * Creates an alarm off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alarmOffIcon = (...properties) => {
    const element = document.createElement('div');
    initAlarmOffIcon(element, ...properties);
    return element;
}
