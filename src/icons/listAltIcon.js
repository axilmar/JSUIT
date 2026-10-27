import { initIcon } from "./icon.js";

//the url of the list alt svg; resolved relative to this module
const URL_LISTALT = new URL('../../assets/icons/listAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a list alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/listAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initListAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'listAltIcon', url: URL_LISTALT }, ...properties);
}

/**
 * Creates a list alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const listAltIcon = (...properties) => {
    const element = document.createElement('div');
    initListAltIcon(element, ...properties);
    return element;
}
