import { initIcon } from "./icon.js";

//the url of the nightlife svg; resolved relative to this module
const URL_NIGHTLIFE = new URL('../../assets/icons/nightlife.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nightlife icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightlife.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightlifeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nightlifeIcon', url: URL_NIGHTLIFE }, ...properties);
}

/**
 * Creates a nightlife icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightlifeIcon = (...properties) => {
    const element = document.createElement('div');
    initNightlifeIcon(element, ...properties);
    return element;
}
