import { initIcon } from "./icon.js";

//the url of the alarm on svg; resolved relative to this module
const URL_ALARMON = new URL('../../assets/icons/alarmOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alarm on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alarmOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlarmOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALARMON }, ...properties);
}

/**
 * Creates an alarm on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alarmOnIcon = (...properties) => {
    const element = document.createElement('div');
    initAlarmOnIcon(element, ...properties);
    return element;
}
