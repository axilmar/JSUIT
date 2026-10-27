import { initIcon } from "./icon.js";

//the url of the piano outlined svg; resolved relative to this module
const URL_PIANOOUTLINED = new URL('../../assets/icons/pianoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a piano outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pianoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPianoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pianoOutlinedIcon', url: URL_PIANOOUTLINED }, ...properties);
}

/**
 * Creates a piano outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pianoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPianoOutlinedIcon(element, ...properties);
    return element;
}
