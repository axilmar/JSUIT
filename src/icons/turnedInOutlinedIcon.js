import { initIcon } from "./icon.js";

//the url of the turned in outlined svg; resolved relative to this module
const URL_TURNEDINOUTLINED = new URL('../../assets/icons/turnedInOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turned in outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnedInOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnedInOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnedInOutlinedIcon', url: URL_TURNEDINOUTLINED }, ...properties);
}

/**
 * Creates a turned in outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnedInOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnedInOutlinedIcon(element, ...properties);
    return element;
}
