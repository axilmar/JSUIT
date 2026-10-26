import { initIcon } from "./icon.js";

//the url of the directions bike svg; resolved relative to this module
const URL_DIRECTIONSBIKE = new URL('../../assets/icons/directionsBike.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions bike icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBike.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBikeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSBIKE }, ...properties);
}

/**
 * Creates a directions bike icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBikeIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBikeIcon(element, ...properties);
    return element;
}
