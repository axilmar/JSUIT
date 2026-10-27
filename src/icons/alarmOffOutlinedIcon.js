import { initIcon } from "./icon.js";

//the url of the alarm off outlined svg; resolved relative to this module
const URL_ALARMOFFOUTLINED = new URL('../../assets/icons/alarmOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alarm off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alarmOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlarmOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alarmOffOutlinedIcon', url: URL_ALARMOFFOUTLINED }, ...properties);
}

/**
 * Creates an alarm off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alarmOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlarmOffOutlinedIcon(element, ...properties);
    return element;
}
