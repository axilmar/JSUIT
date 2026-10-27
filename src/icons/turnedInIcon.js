import { initIcon } from "./icon.js";

//the url of the turned in svg; resolved relative to this module
const URL_TURNEDIN = new URL('../../assets/icons/turnedIn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turned in icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnedIn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnedInIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnedInIcon', url: URL_TURNEDIN }, ...properties);
}

/**
 * Creates a turned in icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnedInIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnedInIcon(element, ...properties);
    return element;
}
