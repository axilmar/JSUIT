import { initIcon } from "./icon.js";

//the url of the five g svg; resolved relative to this module
const URL_FIVEG = new URL('../../assets/icons/fiveG.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five g icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveG.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveGIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiveGIcon', url: URL_FIVEG }, ...properties);
}

/**
 * Creates a five g icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveGIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveGIcon(element, ...properties);
    return element;
}
