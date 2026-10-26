import { initIcon } from "./icon.js";

//the url of the near me svg; resolved relative to this module
const URL_NEARME = new URL('../../assets/icons/nearMe.svg', import.meta.url).href;

/**
 * Initializes an icon element as a near me icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearMe.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearMeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEARME }, ...properties);
}

/**
 * Creates a near me icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearMeIcon = (...properties) => {
    const element = document.createElement('div');
    initNearMeIcon(element, ...properties);
    return element;
}
