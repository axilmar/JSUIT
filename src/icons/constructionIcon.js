import { initIcon } from "./icon.js";

//the url of the construction svg; resolved relative to this module
const URL_CONSTRUCTION = new URL('../../assets/icons/construction.svg', import.meta.url).href;

/**
 * Initializes an icon element as a construction icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/construction.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConstructionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'constructionIcon', url: URL_CONSTRUCTION }, ...properties);
}

/**
 * Creates a construction icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const constructionIcon = (...properties) => {
    const element = document.createElement('div');
    initConstructionIcon(element, ...properties);
    return element;
}
