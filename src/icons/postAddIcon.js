import { initIcon } from "./icon.js";

//the url of the post add svg; resolved relative to this module
const URL_POSTADD = new URL('../../assets/icons/postAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a post add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/postAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPostAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'postAddIcon', url: URL_POSTADD }, ...properties);
}

/**
 * Creates a post add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const postAddIcon = (...properties) => {
    const element = document.createElement('div');
    initPostAddIcon(element, ...properties);
    return element;
}
