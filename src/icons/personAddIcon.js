import { initIcon } from "./icon.js";

//the url of the person add svg; resolved relative to this module
const URL_PERSONADD = new URL('../../assets/icons/personAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personAddIcon', url: URL_PERSONADD }, ...properties);
}

/**
 * Creates a person add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personAddIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonAddIcon(element, ...properties);
    return element;
}
