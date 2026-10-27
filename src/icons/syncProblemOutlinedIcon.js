import { initIcon } from "./icon.js";

//the url of the sync problem outlined svg; resolved relative to this module
const URL_SYNCPROBLEMOUTLINED = new URL('../../assets/icons/syncProblemOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync problem outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncProblemOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncProblemOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'syncProblemOutlinedIcon', url: URL_SYNCPROBLEMOUTLINED }, ...properties);
}

/**
 * Creates a sync problem outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncProblemOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncProblemOutlinedIcon(element, ...properties);
    return element;
}
