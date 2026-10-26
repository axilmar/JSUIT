import { initIcon } from "./icon.js";

//the url of the where to vote svg; resolved relative to this module
const URL_WHERETOVOTE = new URL('../../assets/icons/whereToVote.svg', import.meta.url).href;

/**
 * Initializes an icon element as a where to vote icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/whereToVote.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWhereToVoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WHERETOVOTE }, ...properties);
}

/**
 * Creates a where to vote icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const whereToVoteIcon = (...properties) => {
    const element = document.createElement('div');
    initWhereToVoteIcon(element, ...properties);
    return element;
}
