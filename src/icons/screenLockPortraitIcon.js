import { initIcon } from "./icon.js";

//the url of the screen lock portrait svg; resolved relative to this module
const URL_SCREENLOCKPORTRAIT = new URL('../../assets/icons/screenLockPortrait.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen lock portrait icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenLockPortrait.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenLockPortraitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENLOCKPORTRAIT }, ...properties);
}

/**
 * Creates a screen lock portrait icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenLockPortraitIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenLockPortraitIcon(element, ...properties);
    return element;
}
