import { initIcon } from "./icon.js";

//the url of the alarm on outlined svg; resolved relative to this module
const URL_ALARMONOUTLINED = new URL('../../assets/icons/alarmOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alarm on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alarmOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlarmOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alarmOnOutlinedIcon', url: URL_ALARMONOUTLINED }, ...properties);
}

/**
 * Creates an alarm on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alarmOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlarmOnOutlinedIcon(element, ...properties);
    return element;
}
