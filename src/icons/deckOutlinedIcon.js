import { initIcon } from "./icon.js";

//the url of the deck outlined svg; resolved relative to this module
const URL_DECKOUTLINED = new URL('../../assets/icons/deckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a deck outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deckOutlinedIcon', url: URL_DECKOUTLINED }, ...properties);
}

/**
 * Creates a deck outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeckOutlinedIcon(element, ...properties);
    return element;
}
