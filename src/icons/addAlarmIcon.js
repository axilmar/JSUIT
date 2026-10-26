import { initIcon } from "./icon.js";

//the url of the add alarm svg; resolved relative to this module
const URL_ADDALARM = new URL('../../assets/icons/addAlarm.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add alarm icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addAlarm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddAlarmIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDALARM }, ...properties);
}

/**
 * Creates an add alarm icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addAlarmIcon = (...properties) => {
    const element = document.createElement('div');
    initAddAlarmIcon(element, ...properties);
    return element;
}
