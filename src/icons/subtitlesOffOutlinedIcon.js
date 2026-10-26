import { initIcon } from "./icon.js";

//the url of the subtitles off outlined svg; resolved relative to this module
const URL_SUBTITLESOFFOUTLINED = new URL('../../assets/icons/subtitlesOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subtitles off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subtitlesOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubtitlesOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBTITLESOFFOUTLINED }, ...properties);
}

/**
 * Creates a subtitles off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subtitlesOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSubtitlesOffOutlinedIcon(element, ...properties);
    return element;
}
