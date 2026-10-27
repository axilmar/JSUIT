import { initIcon } from "./icon.js";

//the url of the subtitles outlined svg; resolved relative to this module
const URL_SUBTITLESOUTLINED = new URL('../../assets/icons/subtitlesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subtitles outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subtitlesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubtitlesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'subtitlesOutlinedIcon', url: URL_SUBTITLESOUTLINED }, ...properties);
}

/**
 * Creates a subtitles outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subtitlesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSubtitlesOutlinedIcon(element, ...properties);
    return element;
}
