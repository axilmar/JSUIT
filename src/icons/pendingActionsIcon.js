import { initIcon } from "./icon.js";

//the url of the pending actions svg; resolved relative to this module
const URL_PENDINGACTIONS = new URL('../../assets/icons/pendingActions.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pending actions icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pendingActions.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPendingActionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PENDINGACTIONS }, ...properties);
}

/**
 * Creates a pending actions icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pendingActionsIcon = (...properties) => {
    const element = document.createElement('div');
    initPendingActionsIcon(element, ...properties);
    return element;
}
