import { initIcon } from "./icon.js";

//the url of the where to vote outlined svg; resolved relative to this module
const URL_WHERETOVOTEOUTLINED = new URL('../../assets/icons/whereToVoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a where to vote outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/whereToVoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWhereToVoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'whereToVoteOutlinedIcon', url: URL_WHERETOVOTEOUTLINED }, ...properties);
}

/**
 * Creates a where to vote outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const whereToVoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWhereToVoteOutlinedIcon(element, ...properties);
    return element;
}
