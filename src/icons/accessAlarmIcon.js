import { initIcon } from "./icon.js";

//the url of the access alarm svg; resolved relative to this module
const URL_ACCESSALARM = new URL('../../assets/icons/accessAlarm.svg', import.meta.url).href;

/**
 * Initializes an icon element as an access alarm icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessAlarm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessAlarmIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessAlarmIcon', url: URL_ACCESSALARM }, ...properties);
}

/**
 * Creates an access alarm icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessAlarmIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessAlarmIcon(element, ...properties);
    return element;
}
