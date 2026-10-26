import { initIcon } from "./icon.js";

//the url of the adjust outlined svg; resolved relative to this module
const URL_ADJUSTOUTLINED = new URL('../../assets/icons/adjustOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an adjust outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adjustOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdjustOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADJUSTOUTLINED }, ...properties);
}

/**
 * Creates an adjust outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adjustOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAdjustOutlinedIcon(element, ...properties);
    return element;
}
