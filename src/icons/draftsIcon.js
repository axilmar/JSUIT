import { initIcon } from "./icon.js";

//the url of the drafts svg; resolved relative to this module
const URL_DRAFTS = new URL('../../assets/icons/drafts.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drafts icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/drafts.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDraftsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'draftsIcon', url: URL_DRAFTS }, ...properties);
}

/**
 * Creates a drafts icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const draftsIcon = (...properties) => {
    const element = document.createElement('div');
    initDraftsIcon(element, ...properties);
    return element;
}
