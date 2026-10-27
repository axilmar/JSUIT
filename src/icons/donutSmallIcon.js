import { initIcon } from "./icon.js";

//the url of the donut small svg; resolved relative to this module
const URL_DONUTSMALL = new URL('../../assets/icons/donutSmall.svg', import.meta.url).href;

/**
 * Initializes an icon element as a donut small icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/donutSmall.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDonutSmallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'donutSmallIcon', url: URL_DONUTSMALL }, ...properties);
}

/**
 * Creates a donut small icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const donutSmallIcon = (...properties) => {
    const element = document.createElement('div');
    initDonutSmallIcon(element, ...properties);
    return element;
}
