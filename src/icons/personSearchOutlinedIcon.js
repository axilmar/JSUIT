import { initIcon } from "./icon.js";

//the url of the person search outlined svg; resolved relative to this module
const URL_PERSONSEARCHOUTLINED = new URL('../../assets/icons/personSearchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person search outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personSearchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonSearchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONSEARCHOUTLINED }, ...properties);
}

/**
 * Creates a person search outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personSearchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonSearchOutlinedIcon(element, ...properties);
    return element;
}
