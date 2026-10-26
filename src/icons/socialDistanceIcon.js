import { initIcon } from "./icon.js";

//the url of the social distance svg; resolved relative to this module
const URL_SOCIALDISTANCE = new URL('../../assets/icons/socialDistance.svg', import.meta.url).href;

/**
 * Initializes an icon element as a social distance icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/socialDistance.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSocialDistanceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOCIALDISTANCE }, ...properties);
}

/**
 * Creates a social distance icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const socialDistanceIcon = (...properties) => {
    const element = document.createElement('div');
    initSocialDistanceIcon(element, ...properties);
    return element;
}
