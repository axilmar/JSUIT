import { initIcon } from "./icon.js";

//the url of the how to vote outlined svg; resolved relative to this module
const URL_HOWTOVOTEOUTLINED = new URL('../../assets/icons/howToVoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a how to vote outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/howToVoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHowToVoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOWTOVOTEOUTLINED }, ...properties);
}

/**
 * Creates a how to vote outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const howToVoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHowToVoteOutlinedIcon(element, ...properties);
    return element;
}
