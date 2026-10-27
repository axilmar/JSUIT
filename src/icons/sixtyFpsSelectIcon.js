import { initIcon } from "./icon.js";

//the url of the sixty fps select svg; resolved relative to this module
const URL_SIXTYFPSSELECT = new URL('../../assets/icons/sixtyFpsSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sixty fps select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixtyFpsSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixtyFpsSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sixtyFpsSelectIcon', url: URL_SIXTYFPSSELECT }, ...properties);
}

/**
 * Creates a sixty fps select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixtyFpsSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initSixtyFpsSelectIcon(element, ...properties);
    return element;
}
