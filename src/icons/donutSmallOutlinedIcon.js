import { initIcon } from "./icon.js";

//the url of the donut small outlined svg; resolved relative to this module
const URL_DONUTSMALLOUTLINED = new URL('../../assets/icons/donutSmallOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a donut small outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/donutSmallOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDonutSmallOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONUTSMALLOUTLINED }, ...properties);
}

/**
 * Creates a donut small outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const donutSmallOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDonutSmallOutlinedIcon(element, ...properties);
    return element;
}
