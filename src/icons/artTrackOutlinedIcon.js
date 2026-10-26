import { initIcon } from "./icon.js";

//the url of the art track outlined svg; resolved relative to this module
const URL_ARTTRACKOUTLINED = new URL('../../assets/icons/artTrackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an art track outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/artTrackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArtTrackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARTTRACKOUTLINED }, ...properties);
}

/**
 * Creates an art track outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const artTrackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArtTrackOutlinedIcon(element, ...properties);
    return element;
}
