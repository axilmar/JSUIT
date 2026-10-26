import { initIcon } from "./icon.js";

//the url of the screen rotation alt outlined svg; resolved relative to this module
const URL_SCREENROTATIONALTOUTLINED = new URL('../../assets/icons/screenRotationAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen rotation alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenRotationAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenRotationAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENROTATIONALTOUTLINED }, ...properties);
}

/**
 * Creates a screen rotation alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenRotationAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenRotationAltOutlinedIcon(element, ...properties);
    return element;
}
