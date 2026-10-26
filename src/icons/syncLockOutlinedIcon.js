import { initIcon } from "./icon.js";

//the url of the sync lock outlined svg; resolved relative to this module
const URL_SYNCLOCKOUTLINED = new URL('../../assets/icons/syncLockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync lock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncLockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncLockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYNCLOCKOUTLINED }, ...properties);
}

/**
 * Creates a sync lock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncLockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncLockOutlinedIcon(element, ...properties);
    return element;
}
