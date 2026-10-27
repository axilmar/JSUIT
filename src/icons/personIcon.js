import { initIcon } from "./icon.js";

//the url of the person svg; resolved relative to this module
const URL_PERSON = new URL('../../assets/icons/person.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/person.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personIcon', url: URL_PERSON }, ...properties);
}

/**
 * Creates a person icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonIcon(element, ...properties);
    return element;
}
