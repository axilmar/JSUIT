import { initIcon } from "./icon.js";

//the url of the youtube searched for outlined svg; resolved relative to this module
const URL_YOUTUBESEARCHEDFOROUTLINED = new URL('../../assets/icons/youtubeSearchedForOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a youtube searched for outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/youtubeSearchedForOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initYoutubeSearchedForOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'youtubeSearchedForOutlinedIcon', url: URL_YOUTUBESEARCHEDFOROUTLINED }, ...properties);
}

/**
 * Creates a youtube searched for outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const youtubeSearchedForOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initYoutubeSearchedForOutlinedIcon(element, ...properties);
    return element;
}
