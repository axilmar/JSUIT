import { initIcon } from "./icon.js";

//the url of the add card svg; resolved relative to this module
const URL_ADDCARD = new URL('../../assets/icons/addCard.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add card icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addCard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addCardIcon', url: URL_ADDCARD }, ...properties);
}

/**
 * Creates an add card icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCardIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCardIcon(element, ...properties);
    return element;
}
