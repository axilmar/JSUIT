import { initIcon } from "./icon.js";

//the url of the piano svg; resolved relative to this module
const URL_PIANO = new URL('../../assets/icons/piano.svg', import.meta.url).href;

/**
 * Initializes an icon element as a piano icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/piano.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPianoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PIANO }, ...properties);
}

/**
 * Creates a piano icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pianoIcon = (...properties) => {
    const element = document.createElement('div');
    initPianoIcon(element, ...properties);
    return element;
}
