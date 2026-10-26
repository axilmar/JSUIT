import { initIcon } from "./icon.js";

//the url of the person3 outlined svg; resolved relative to this module
const URL_PERSON3OUTLINED = new URL('../../assets/icons/person3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/person3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPerson3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSON3OUTLINED }, ...properties);
}

/**
 * Creates a person3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const person3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPerson3OutlinedIcon(element, ...properties);
    return element;
}
