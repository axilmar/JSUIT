import { initIcon } from "./icon.js";

//the url of the screen rotation outlined svg; resolved relative to this module
const URL_SCREENROTATIONOUTLINED = new URL('../../assets/icons/screenRotationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen rotation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenRotationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenRotationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'screenRotationOutlinedIcon', url: URL_SCREENROTATIONOUTLINED }, ...properties);
}

/**
 * Creates a screen rotation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenRotationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenRotationOutlinedIcon(element, ...properties);
    return element;
}
