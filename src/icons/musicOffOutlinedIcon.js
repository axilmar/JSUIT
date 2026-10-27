import { initIcon } from "./icon.js";

//the url of the music off outlined svg; resolved relative to this module
const URL_MUSICOFFOUTLINED = new URL('../../assets/icons/musicOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a music off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/musicOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMusicOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'musicOffOutlinedIcon', url: URL_MUSICOFFOUTLINED }, ...properties);
}

/**
 * Creates a music off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const musicOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMusicOffOutlinedIcon(element, ...properties);
    return element;
}
