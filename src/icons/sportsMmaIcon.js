import { initIcon } from "./icon.js";

//the url of the sports mma svg; resolved relative to this module
const URL_SPORTSMMA = new URL('../../assets/icons/sportsMma.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports mma icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsMma.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsMmaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsMmaIcon', url: URL_SPORTSMMA }, ...properties);
}

/**
 * Creates a sports mma icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsMmaIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsMmaIcon(element, ...properties);
    return element;
}
