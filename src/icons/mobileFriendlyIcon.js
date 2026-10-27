import { initIcon } from "./icon.js";

//the url of the mobile friendly svg; resolved relative to this module
const URL_MOBILEFRIENDLY = new URL('../../assets/icons/mobileFriendly.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mobile friendly icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mobileFriendly.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMobileFriendlyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mobileFriendlyIcon', url: URL_MOBILEFRIENDLY }, ...properties);
}

/**
 * Creates a mobile friendly icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mobileFriendlyIcon = (...properties) => {
    const element = document.createElement('div');
    initMobileFriendlyIcon(element, ...properties);
    return element;
}
