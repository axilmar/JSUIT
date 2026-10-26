import { initIcon } from "./icon.js";

//the url of the twenty four mp svg; resolved relative to this module
const URL_TWENTYFOURMP = new URL('../../assets/icons/twentyFourMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty four mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyFourMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyFourMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWENTYFOURMP }, ...properties);
}

/**
 * Creates a twenty four mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyFourMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyFourMpIcon(element, ...properties);
    return element;
}
