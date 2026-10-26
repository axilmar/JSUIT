import { initIcon } from "./icon.js";

//the url of the screen lock rotation svg; resolved relative to this module
const URL_SCREENLOCKROTATION = new URL('../../assets/icons/screenLockRotation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen lock rotation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenLockRotation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenLockRotationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENLOCKROTATION }, ...properties);
}

/**
 * Creates a screen lock rotation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenLockRotationIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenLockRotationIcon(element, ...properties);
    return element;
}
