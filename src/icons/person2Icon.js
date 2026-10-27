import { initIcon } from "./icon.js";

//the url of the person2 svg; resolved relative to this module
const URL_PERSON2 = new URL('../../assets/icons/person2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/person2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPerson2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'person2Icon', url: URL_PERSON2 }, ...properties);
}

/**
 * Creates a person2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const person2Icon = (...properties) => {
    const element = document.createElement('div');
    initPerson2Icon(element, ...properties);
    return element;
}
