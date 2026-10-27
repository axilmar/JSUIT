import { initIcon } from "./icon.js";

//the url of the snooze svg; resolved relative to this module
const URL_SNOOZE = new URL('../../assets/icons/snooze.svg', import.meta.url).href;

/**
 * Initializes an icon element as a snooze icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/snooze.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSnoozeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'snoozeIcon', url: URL_SNOOZE }, ...properties);
}

/**
 * Creates a snooze icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const snoozeIcon = (...properties) => {
    const element = document.createElement('div');
    initSnoozeIcon(element, ...properties);
    return element;
}
