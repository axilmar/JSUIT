import { initIcon } from "./icon.js";

//the url of the card giftcard outlined svg; resolved relative to this module
const URL_CARDGIFTCARDOUTLINED = new URL('../../assets/icons/cardGiftcardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a card giftcard outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cardGiftcardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCardGiftcardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CARDGIFTCARDOUTLINED }, ...properties);
}

/**
 * Creates a card giftcard outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cardGiftcardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCardGiftcardOutlinedIcon(element, ...properties);
    return element;
}
