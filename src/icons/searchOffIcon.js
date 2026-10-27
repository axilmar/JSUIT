import { initIcon } from "./icon.js";

//the url of the search off svg; resolved relative to this module
const URL_SEARCHOFF = new URL('../../assets/icons/searchOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a search off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/searchOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSearchOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'searchOffIcon', url: URL_SEARCHOFF }, ...properties);
}

/**
 * Creates a search off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const searchOffIcon = (...properties) => {
    const element = document.createElement('div');
    initSearchOffIcon(element, ...properties);
    return element;
}
