import { initIcon } from "./icon.js";

//the url of the screen rotation svg; resolved relative to this module
const URL_SCREENROTATION = new URL('../../assets/icons/screenRotation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen rotation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenRotation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenRotationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENROTATION }, ...properties);
}

/**
 * Creates a screen rotation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenRotationIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenRotationIcon(element, ...properties);
    return element;
}
