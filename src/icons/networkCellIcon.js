import { initIcon } from "./icon.js";

//the url of the network cell svg; resolved relative to this module
const URL_NETWORKCELL = new URL('../../assets/icons/networkCell.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network cell icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkCell.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkCellIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NETWORKCELL }, ...properties);
}

/**
 * Creates a network cell icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkCellIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkCellIcon(element, ...properties);
    return element;
}
