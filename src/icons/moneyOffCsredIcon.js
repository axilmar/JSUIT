import { initIcon } from "./icon.js";

//the url of the money off csred svg; resolved relative to this module
const URL_MONEYOFFCSRED = new URL('../../assets/icons/moneyOffCsred.svg', import.meta.url).href;

/**
 * Initializes an icon element as a money off csred icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moneyOffCsred.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoneyOffCsredIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moneyOffCsredIcon', url: URL_MONEYOFFCSRED }, ...properties);
}

/**
 * Creates a money off csred icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moneyOffCsredIcon = (...properties) => {
    const element = document.createElement('div');
    initMoneyOffCsredIcon(element, ...properties);
    return element;
}
