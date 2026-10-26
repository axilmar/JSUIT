import { initIcon } from "./icon.js";

//the url of the subtitles off svg; resolved relative to this module
const URL_SUBTITLESOFF = new URL('../../assets/icons/subtitlesOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subtitles off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subtitlesOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubtitlesOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBTITLESOFF }, ...properties);
}

/**
 * Creates a subtitles off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subtitlesOffIcon = (...properties) => {
    const element = document.createElement('div');
    initSubtitlesOffIcon(element, ...properties);
    return element;
}
