import { initIcon } from "./icon.js";

//the url of the five k plus svg; resolved relative to this module
const URL_FIVEKPLUS = new URL('../../assets/icons/fiveKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiveKPlusIcon', url: URL_FIVEKPLUS }, ...properties);
}

/**
 * Creates a five k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveKPlusIcon(element, ...properties);
    return element;
}
