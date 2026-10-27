import { initIcon } from "./icon.js";

//the url of the forum svg; resolved relative to this module
const URL_FORUM = new URL('../../assets/icons/forum.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forum icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forum.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForumIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forumIcon', url: URL_FORUM }, ...properties);
}

/**
 * Creates a forum icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forumIcon = (...properties) => {
    const element = document.createElement('div');
    initForumIcon(element, ...properties);
    return element;
}
