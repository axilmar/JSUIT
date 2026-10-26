import { initIcon } from "./icon.js";

//the url of the nightlight round svg; resolved relative to this module
const URL_NIGHTLIGHTROUND = new URL('../../assets/icons/nightlightRound.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nightlight round icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightlightRound.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightlightRoundIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NIGHTLIGHTROUND }, ...properties);
}

/**
 * Creates a nightlight round icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightlightRoundIcon = (...properties) => {
    const element = document.createElement('div');
    initNightlightRoundIcon(element, ...properties);
    return element;
}
