import { initIcon } from "./icon.js";

//the url of the explicit outlined svg; resolved relative to this module
const URL_EXPLICITOUTLINED = new URL('../../assets/icons/explicitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an explicit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/explicitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExplicitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'explicitOutlinedIcon', url: URL_EXPLICITOUTLINED }, ...properties);
}

/**
 * Creates an explicit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const explicitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExplicitOutlinedIcon(element, ...properties);
    return element;
}
