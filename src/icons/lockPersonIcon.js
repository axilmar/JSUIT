import { initIcon } from "./icon.js";

//the url of the lock person svg; resolved relative to this module
const URL_LOCKPERSON = new URL('../../assets/icons/lockPerson.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock person icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockPerson.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockPersonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCKPERSON }, ...properties);
}

/**
 * Creates a lock person icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockPersonIcon = (...properties) => {
    const element = document.createElement('div');
    initLockPersonIcon(element, ...properties);
    return element;
}
