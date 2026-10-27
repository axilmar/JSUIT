import { initIcon } from "./icon.js";

//the url of the tapas outlined svg; resolved relative to this module
const URL_TAPASOUTLINED = new URL('../../assets/icons/tapasOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tapas outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tapasOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTapasOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tapasOutlinedIcon', url: URL_TAPASOUTLINED }, ...properties);
}

/**
 * Creates a tapas outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tapasOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTapasOutlinedIcon(element, ...properties);
    return element;
}
