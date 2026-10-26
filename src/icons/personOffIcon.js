import { initIcon } from "./icon.js";

//the url of the person off svg; resolved relative to this module
const URL_PERSONOFF = new URL('../../assets/icons/personOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONOFF }, ...properties);
}

/**
 * Creates a person off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personOffIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonOffIcon(element, ...properties);
    return element;
}
