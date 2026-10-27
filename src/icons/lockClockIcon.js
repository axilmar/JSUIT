import { initIcon } from "./icon.js";

//the url of the lock clock svg; resolved relative to this module
const URL_LOCKCLOCK = new URL('../../assets/icons/lockClock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock clock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockClock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockClockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lockClockIcon', url: URL_LOCKCLOCK }, ...properties);
}

/**
 * Creates a lock clock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockClockIcon = (...properties) => {
    const element = document.createElement('div');
    initLockClockIcon(element, ...properties);
    return element;
}
