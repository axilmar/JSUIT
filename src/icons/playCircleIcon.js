import { initIcon } from "./icon.js";

//the url of the play circle svg; resolved relative to this module
const URL_PLAYCIRCLE = new URL('../../assets/icons/playCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYCIRCLE }, ...properties);
}

/**
 * Creates a play circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayCircleIcon(element, ...properties);
    return element;
}
