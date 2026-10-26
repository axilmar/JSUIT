import { initIcon } from "./icon.js";

//the url of the access alarms svg; resolved relative to this module
const URL_ACCESSALARMS = new URL('../../assets/icons/accessAlarms.svg', import.meta.url).href;

/**
 * Initializes an icon element as an access alarms icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessAlarms.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessAlarmsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCESSALARMS }, ...properties);
}

/**
 * Creates an access alarms icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessAlarmsIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessAlarmsIcon(element, ...properties);
    return element;
}
