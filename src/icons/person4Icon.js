import { initIcon } from "./icon.js";

//the url of the person4 svg; resolved relative to this module
const URL_PERSON4 = new URL('../../assets/icons/person4.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person4 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/person4.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPerson4Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'person4Icon', url: URL_PERSON4 }, ...properties);
}

/**
 * Creates a person4 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const person4Icon = (...properties) => {
    const element = document.createElement('div');
    initPerson4Icon(element, ...properties);
    return element;
}
