import { initIcon } from "./icon.js";

//the url of the music video outlined svg; resolved relative to this module
const URL_MUSICVIDEOOUTLINED = new URL('../../assets/icons/musicVideoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a music video outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/musicVideoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMusicVideoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'musicVideoOutlinedIcon', url: URL_MUSICVIDEOOUTLINED }, ...properties);
}

/**
 * Creates a music video outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const musicVideoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMusicVideoOutlinedIcon(element, ...properties);
    return element;
}
