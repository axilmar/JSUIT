import { initIcon } from "./icon.js";

//the url of the alarm add svg; resolved relative to this module
const URL_ALARMADD = new URL('../../assets/icons/alarmAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alarm add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alarmAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlarmAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alarmAddIcon', url: URL_ALARMADD }, ...properties);
}

/**
 * Creates an alarm add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alarmAddIcon = (...properties) => {
    const element = document.createElement('div');
    initAlarmAddIcon(element, ...properties);
    return element;
}
