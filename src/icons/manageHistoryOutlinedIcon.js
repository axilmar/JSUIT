import { initIcon } from "./icon.js";

//the url of the manage history outlined svg; resolved relative to this module
const URL_MANAGEHISTORYOUTLINED = new URL('../../assets/icons/manageHistoryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a manage history outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/manageHistoryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initManageHistoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MANAGEHISTORYOUTLINED }, ...properties);
}

/**
 * Creates a manage history outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const manageHistoryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initManageHistoryOutlinedIcon(element, ...properties);
    return element;
}
