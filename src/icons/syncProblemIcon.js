import { initIcon } from "./icon.js";

//the url of the sync problem svg; resolved relative to this module
const URL_SYNCPROBLEM = new URL('../../assets/icons/syncProblem.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync problem icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncProblem.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncProblemIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYNCPROBLEM }, ...properties);
}

/**
 * Creates a sync problem icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncProblemIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncProblemIcon(element, ...properties);
    return element;
}
