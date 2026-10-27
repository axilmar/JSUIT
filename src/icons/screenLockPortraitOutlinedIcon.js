import { initIcon } from "./icon.js";

//the url of the screen lock portrait outlined svg; resolved relative to this module
const URL_SCREENLOCKPORTRAITOUTLINED = new URL('../../assets/icons/screenLockPortraitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen lock portrait outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenLockPortraitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenLockPortraitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'screenLockPortraitOutlinedIcon', url: URL_SCREENLOCKPORTRAITOUTLINED }, ...properties);
}

/**
 * Creates a screen lock portrait outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenLockPortraitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenLockPortraitOutlinedIcon(element, ...properties);
    return element;
}
