import { initIcon } from "./icon.js";

//the url of the money off svg; resolved relative to this module
const URL_MONEYOFF = new URL('../../assets/icons/moneyOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a money off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moneyOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoneyOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moneyOffIcon', url: URL_MONEYOFF }, ...properties);
}

/**
 * Creates a money off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moneyOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMoneyOffIcon(element, ...properties);
    return element;
}
