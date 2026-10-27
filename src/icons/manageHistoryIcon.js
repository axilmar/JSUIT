import { initIcon } from "./icon.js";

//the url of the manage history svg; resolved relative to this module
const URL_MANAGEHISTORY = new URL('../../assets/icons/manageHistory.svg', import.meta.url).href;

/**
 * Initializes an icon element as a manage history icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/manageHistory.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManageHistoryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'manageHistoryIcon', url: URL_MANAGEHISTORY }, ...properties);
}

/**
 * Creates a manage history icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manageHistoryIcon = (...properties) => {
    const element = document.createElement('div');
    initManageHistoryIcon(element, ...properties);
    return element;
}
