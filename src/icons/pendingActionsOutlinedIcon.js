import { initIcon } from "./icon.js";

//the url of the pending actions outlined svg; resolved relative to this module
const URL_PENDINGACTIONSOUTLINED = new URL('../../assets/icons/pendingActionsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pending actions outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pendingActionsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPendingActionsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PENDINGACTIONSOUTLINED }, ...properties);
}

/**
 * Creates a pending actions outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pendingActionsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPendingActionsOutlinedIcon(element, ...properties);
    return element;
}
