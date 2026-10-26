import { initIcon } from "./icon.js";

//the url of the snooze outlined svg; resolved relative to this module
const URL_SNOOZEOUTLINED = new URL('../../assets/icons/snoozeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a snooze outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/snoozeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSnoozeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SNOOZEOUTLINED }, ...properties);
}

/**
 * Creates a snooze outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const snoozeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSnoozeOutlinedIcon(element, ...properties);
    return element;
}
