import { initIcon } from "./icon.js";

//the url of the surround sound svg; resolved relative to this module
const URL_SURROUNDSOUND = new URL('../../assets/icons/surroundSound.svg', import.meta.url).href;

/**
 * Initializes an icon element as a surround sound icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/surroundSound.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSurroundSoundIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SURROUNDSOUND }, ...properties);
}

/**
 * Creates a surround sound icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const surroundSoundIcon = (...properties) => {
    const element = document.createElement('div');
    initSurroundSoundIcon(element, ...properties);
    return element;
}
