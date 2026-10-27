import { initIcon } from "./icon.js";

//the url of the person2 outlined svg; resolved relative to this module
const URL_PERSON2OUTLINED = new URL('../../assets/icons/person2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/person2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPerson2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'person2OutlinedIcon', url: URL_PERSON2OUTLINED }, ...properties);
}

/**
 * Creates a person2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const person2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPerson2OutlinedIcon(element, ...properties);
    return element;
}
