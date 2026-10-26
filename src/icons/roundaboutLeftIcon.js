import { initIcon } from "./icon.js";

//the url of the roundabout left svg; resolved relative to this module
const URL_ROUNDABOUTLEFT = new URL('../../assets/icons/roundaboutLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roundabout left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roundaboutLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoundaboutLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROUNDABOUTLEFT }, ...properties);
}

/**
 * Creates a roundabout left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roundaboutLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initRoundaboutLeftIcon(element, ...properties);
    return element;
}
