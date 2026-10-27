import { initIcon } from "./icon.js";

//the url of the turned in not outlined svg; resolved relative to this module
const URL_TURNEDINNOTOUTLINED = new URL('../../assets/icons/turnedInNotOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turned in not outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnedInNotOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnedInNotOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnedInNotOutlinedIcon', url: URL_TURNEDINNOTOUTLINED }, ...properties);
}

/**
 * Creates a turned in not outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnedInNotOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnedInNotOutlinedIcon(element, ...properties);
    return element;
}
