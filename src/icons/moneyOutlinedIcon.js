import { initIcon } from "./icon.js";

//the url of the money outlined svg; resolved relative to this module
const URL_MONEYOUTLINED = new URL('../../assets/icons/moneyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a money outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moneyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoneyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MONEYOUTLINED }, ...properties);
}

/**
 * Creates a money outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moneyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoneyOutlinedIcon(element, ...properties);
    return element;
}
