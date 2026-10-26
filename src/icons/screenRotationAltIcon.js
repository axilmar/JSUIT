import { initIcon } from "./icon.js";

//the url of the screen rotation alt svg; resolved relative to this module
const URL_SCREENROTATIONALT = new URL('../../assets/icons/screenRotationAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen rotation alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenRotationAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenRotationAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENROTATIONALT }, ...properties);
}

/**
 * Creates a screen rotation alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenRotationAltIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenRotationAltIcon(element, ...properties);
    return element;
}
