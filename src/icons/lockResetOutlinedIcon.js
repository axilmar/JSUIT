import { initIcon } from "./icon.js";

//the url of the lock reset outlined svg; resolved relative to this module
const URL_LOCKRESETOUTLINED = new URL('../../assets/icons/lockResetOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock reset outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockResetOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockResetOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCKRESETOUTLINED }, ...properties);
}

/**
 * Creates a lock reset outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockResetOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLockResetOutlinedIcon(element, ...properties);
    return element;
}
