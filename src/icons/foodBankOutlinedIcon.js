import { initIcon } from "./icon.js";

//the url of the food bank outlined svg; resolved relative to this module
const URL_FOODBANKOUTLINED = new URL('../../assets/icons/foodBankOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a food bank outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/foodBankOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFoodBankOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'foodBankOutlinedIcon', url: URL_FOODBANKOUTLINED }, ...properties);
}

/**
 * Creates a food bank outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const foodBankOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFoodBankOutlinedIcon(element, ...properties);
    return element;
}
