import { initIcon } from "./icon.js";

//the url of the subtitles svg; resolved relative to this module
const URL_SUBTITLES = new URL('../../assets/icons/subtitles.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subtitles icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subtitles.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubtitlesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'subtitlesIcon', url: URL_SUBTITLES }, ...properties);
}

/**
 * Creates a subtitles icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subtitlesIcon = (...properties) => {
    const element = document.createElement('div');
    initSubtitlesIcon(element, ...properties);
    return element;
}
