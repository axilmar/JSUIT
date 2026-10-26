import { initIcon } from "./icon.js";

//the url of the card travel outlined svg; resolved relative to this module
const URL_CARDTRAVELOUTLINED = new URL('../../assets/icons/cardTravelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a card travel outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cardTravelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCardTravelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CARDTRAVELOUTLINED }, ...properties);
}

/**
 * Creates a card travel outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cardTravelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCardTravelOutlinedIcon(element, ...properties);
    return element;
}
