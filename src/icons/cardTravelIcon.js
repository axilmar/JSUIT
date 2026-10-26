import { initIcon } from "./icon.js";

//the url of the card travel svg; resolved relative to this module
const URL_CARDTRAVEL = new URL('../../assets/icons/cardTravel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a card travel icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cardTravel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCardTravelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CARDTRAVEL }, ...properties);
}

/**
 * Creates a card travel icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cardTravelIcon = (...properties) => {
    const element = document.createElement('div');
    initCardTravelIcon(element, ...properties);
    return element;
}
