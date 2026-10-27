import { initIcon } from "./icon.js";

//the url of the screen lock landscape svg; resolved relative to this module
const URL_SCREENLOCKLANDSCAPE = new URL('../../assets/icons/screenLockLandscape.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen lock landscape icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenLockLandscape.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenLockLandscapeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'screenLockLandscapeIcon', url: URL_SCREENLOCKLANDSCAPE }, ...properties);
}

/**
 * Creates a screen lock landscape icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenLockLandscapeIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenLockLandscapeIcon(element, ...properties);
    return element;
}
