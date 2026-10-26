import { initIcon } from "./icon.js";

//the url of the waving hand svg; resolved relative to this module
const URL_WAVINGHAND = new URL('../../assets/icons/wavingHand.svg', import.meta.url).href;

/**
 * Initializes an icon element as a waving hand icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wavingHand.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWavingHandIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WAVINGHAND }, ...properties);
}

/**
 * Creates a waving hand icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wavingHandIcon = (...properties) => {
    const element = document.createElement('div');
    initWavingHandIcon(element, ...properties);
    return element;
}
