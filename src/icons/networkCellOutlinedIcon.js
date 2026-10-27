import { initIcon } from "./icon.js";

//the url of the network cell outlined svg; resolved relative to this module
const URL_NETWORKCELLOUTLINED = new URL('../../assets/icons/networkCellOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network cell outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkCellOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkCellOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkCellOutlinedIcon', url: URL_NETWORKCELLOUTLINED }, ...properties);
}

/**
 * Creates a network cell outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkCellOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkCellOutlinedIcon(element, ...properties);
    return element;
}
