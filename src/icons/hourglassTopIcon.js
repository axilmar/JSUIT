import { initIcon } from "./icon.js";

//the url of the hourglass top svg; resolved relative to this module
const URL_HOURGLASSTOP = new URL('../../assets/icons/hourglassTop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass top icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassTop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassTopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOURGLASSTOP }, ...properties);
}

/**
 * Creates a hourglass top icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassTopIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassTopIcon(element, ...properties);
    return element;
}
