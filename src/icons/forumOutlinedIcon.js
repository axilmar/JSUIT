import { initIcon } from "./icon.js";

//the url of the forum outlined svg; resolved relative to this module
const URL_FORUMOUTLINED = new URL('../../assets/icons/forumOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forum outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forumOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForumOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORUMOUTLINED }, ...properties);
}

/**
 * Creates a forum outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forumOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForumOutlinedIcon(element, ...properties);
    return element;
}
