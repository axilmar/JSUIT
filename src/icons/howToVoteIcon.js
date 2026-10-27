import { initIcon } from "./icon.js";

//the url of the how to vote svg; resolved relative to this module
const URL_HOWTOVOTE = new URL('../../assets/icons/howToVote.svg', import.meta.url).href;

/**
 * Initializes an icon element as a how to vote icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/howToVote.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHowToVoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'howToVoteIcon', url: URL_HOWTOVOTE }, ...properties);
}

/**
 * Creates a how to vote icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const howToVoteIcon = (...properties) => {
    const element = document.createElement('div');
    initHowToVoteIcon(element, ...properties);
    return element;
}
