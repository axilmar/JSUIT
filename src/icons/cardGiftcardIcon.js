import { initIcon } from "./icon.js";

//the url of the card giftcard svg; resolved relative to this module
const URL_CARDGIFTCARD = new URL('../../assets/icons/cardGiftcard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a card giftcard icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cardGiftcard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCardGiftcardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cardGiftcardIcon', url: URL_CARDGIFTCARD }, ...properties);
}

/**
 * Creates a card giftcard icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cardGiftcardIcon = (...properties) => {
    const element = document.createElement('div');
    initCardGiftcardIcon(element, ...properties);
    return element;
}
