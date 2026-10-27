import { initIcon } from "./icon.js";

//the url of the rice bowl svg; resolved relative to this module
const URL_RICEBOWL = new URL('../../assets/icons/riceBowl.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rice bowl icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/riceBowl.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRiceBowlIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'riceBowlIcon', url: URL_RICEBOWL }, ...properties);
}

/**
 * Creates a rice bowl icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const riceBowlIcon = (...properties) => {
    const element = document.createElement('div');
    initRiceBowlIcon(element, ...properties);
    return element;
}
