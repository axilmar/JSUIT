import { initIcon } from "./icon.js";

//the url of the lock clock outlined svg; resolved relative to this module
const URL_LOCKCLOCKOUTLINED = new URL('../../assets/icons/lockClockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock clock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockClockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockClockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lockClockOutlinedIcon', url: URL_LOCKCLOCKOUTLINED }, ...properties);
}

/**
 * Creates a lock clock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockClockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLockClockOutlinedIcon(element, ...properties);
    return element;
}
