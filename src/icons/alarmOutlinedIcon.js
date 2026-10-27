import { initIcon } from "./icon.js";

//the url of the alarm outlined svg; resolved relative to this module
const URL_ALARMOUTLINED = new URL('../../assets/icons/alarmOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alarm outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alarmOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlarmOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alarmOutlinedIcon', url: URL_ALARMOUTLINED }, ...properties);
}

/**
 * Creates an alarm outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alarmOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlarmOutlinedIcon(element, ...properties);
    return element;
}
