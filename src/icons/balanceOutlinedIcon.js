import { initIcon } from "./icon.js";

//the url of the balance outlined svg; resolved relative to this module
const URL_BALANCEOUTLINED = new URL('../../assets/icons/balanceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a balance outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/balanceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBalanceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'balanceOutlinedIcon', url: URL_BALANCEOUTLINED }, ...properties);
}

/**
 * Creates a balance outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const balanceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBalanceOutlinedIcon(element, ...properties);
    return element;
}
