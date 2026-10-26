import { initIcon } from "./icon.js";

//the url of the screen lock landscape outlined svg; resolved relative to this module
const URL_SCREENLOCKLANDSCAPEOUTLINED = new URL('../../assets/icons/screenLockLandscapeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen lock landscape outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenLockLandscapeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenLockLandscapeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENLOCKLANDSCAPEOUTLINED }, ...properties);
}

/**
 * Creates a screen lock landscape outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenLockLandscapeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenLockLandscapeOutlinedIcon(element, ...properties);
    return element;
}
