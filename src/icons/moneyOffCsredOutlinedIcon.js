import { initIcon } from "./icon.js";

//the url of the money off csred outlined svg; resolved relative to this module
const URL_MONEYOFFCSREDOUTLINED = new URL('../../assets/icons/moneyOffCsredOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a money off csred outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moneyOffCsredOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoneyOffCsredOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MONEYOFFCSREDOUTLINED }, ...properties);
}

/**
 * Creates a money off csred outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moneyOffCsredOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoneyOffCsredOutlinedIcon(element, ...properties);
    return element;
}
