import { initIcon } from "./icon.js";

//the url of the person search svg; resolved relative to this module
const URL_PERSONSEARCH = new URL('../../assets/icons/personSearch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person search icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personSearch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonSearchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personSearchIcon', url: URL_PERSONSEARCH }, ...properties);
}

/**
 * Creates a person search icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personSearchIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonSearchIcon(element, ...properties);
    return element;
}
