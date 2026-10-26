import { initIcon } from "./icon.js";

//the url of the newspaper svg; resolved relative to this module
const URL_NEWSPAPER = new URL('../../assets/icons/newspaper.svg', import.meta.url).href;

/**
 * Initializes an icon element as a newspaper icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/newspaper.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNewspaperIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NEWSPAPER }, ...properties);
}

/**
 * Creates a newspaper icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const newspaperIcon = (...properties) => {
    const element = document.createElement('div');
    initNewspaperIcon(element, ...properties);
    return element;
}
