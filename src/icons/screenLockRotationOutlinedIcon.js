import { initIcon } from "./icon.js";

//the url of the screen lock rotation outlined svg; resolved relative to this module
const URL_SCREENLOCKROTATIONOUTLINED = new URL('../../assets/icons/screenLockRotationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen lock rotation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenLockRotationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenLockRotationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENLOCKROTATIONOUTLINED }, ...properties);
}

/**
 * Creates a screen lock rotation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenLockRotationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenLockRotationOutlinedIcon(element, ...properties);
    return element;
}
