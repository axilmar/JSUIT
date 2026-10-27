import { initIcon } from "./icon.js";

//the url of the money off outlined svg; resolved relative to this module
const URL_MONEYOFFOUTLINED = new URL('../../assets/icons/moneyOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a money off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moneyOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoneyOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moneyOffOutlinedIcon', url: URL_MONEYOFFOUTLINED }, ...properties);
}

/**
 * Creates a money off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moneyOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoneyOffOutlinedIcon(element, ...properties);
    return element;
}
