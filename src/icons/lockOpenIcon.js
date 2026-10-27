import { initIcon } from "./icon.js";

//the url of the lock open svg; resolved relative to this module
const URL_LOCKOPEN = new URL('../../assets/icons/lockOpen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock open icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockOpen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockOpenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lockOpenIcon', url: URL_LOCKOPEN }, ...properties);
}

/**
 * Creates a lock open icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockOpenIcon = (...properties) => {
    const element = document.createElement('div');
    initLockOpenIcon(element, ...properties);
    return element;
}
