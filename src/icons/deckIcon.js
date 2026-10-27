import { initIcon } from "./icon.js";

//the url of the deck svg; resolved relative to this module
const URL_DECK = new URL('../../assets/icons/deck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a deck icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deckIcon', url: URL_DECK }, ...properties);
}

/**
 * Creates a deck icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deckIcon = (...properties) => {
    const element = document.createElement('div');
    initDeckIcon(element, ...properties);
    return element;
}
