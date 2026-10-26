import { initIcon } from "./icon.js";

//the url of the lock person outlined svg; resolved relative to this module
const URL_LOCKPERSONOUTLINED = new URL('../../assets/icons/lockPersonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock person outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockPersonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockPersonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCKPERSONOUTLINED }, ...properties);
}

/**
 * Creates a lock person outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockPersonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLockPersonOutlinedIcon(element, ...properties);
    return element;
}
