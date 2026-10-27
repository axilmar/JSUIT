import { initIcon } from "./icon.js";

//the url of the person3 svg; resolved relative to this module
const URL_PERSON3 = new URL('../../assets/icons/person3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/person3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPerson3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'person3Icon', url: URL_PERSON3 }, ...properties);
}

/**
 * Creates a person3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const person3Icon = (...properties) => {
    const element = document.createElement('div');
    initPerson3Icon(element, ...properties);
    return element;
}
