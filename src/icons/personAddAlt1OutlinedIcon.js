import { initIcon } from "./icon.js";

//the url of the person add alt1 outlined svg; resolved relative to this module
const URL_PERSONADDALT1OUTLINED = new URL('../../assets/icons/personAddAlt1Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person add alt1 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personAddAlt1Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonAddAlt1OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONADDALT1OUTLINED }, ...properties);
}

/**
 * Creates a person add alt1 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personAddAlt1OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonAddAlt1OutlinedIcon(element, ...properties);
    return element;
}
