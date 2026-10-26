import { initIcon } from "./icon.js";

//the url of the emoji food beverage svg; resolved relative to this module
const URL_EMOJIFOODBEVERAGE = new URL('../../assets/icons/emojiFoodBeverage.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji food beverage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiFoodBeverage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiFoodBeverageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJIFOODBEVERAGE }, ...properties);
}

/**
 * Creates an emoji food beverage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiFoodBeverageIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiFoodBeverageIcon(element, ...properties);
    return element;
}
