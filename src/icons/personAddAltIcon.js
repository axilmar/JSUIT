import { initIcon } from "./icon.js";

//the url of the person add alt svg; resolved relative to this module
const URL_PERSONADDALT = new URL('../../assets/icons/personAddAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person add alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personAddAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonAddAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personAddAltIcon', url: URL_PERSONADDALT }, ...properties);
}

/**
 * Creates a person add alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personAddAltIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonAddAltIcon(element, ...properties);
    return element;
}
