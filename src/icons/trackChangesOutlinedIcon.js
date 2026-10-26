import { initIcon } from "./icon.js";

//the url of the track changes outlined svg; resolved relative to this module
const URL_TRACKCHANGESOUTLINED = new URL('../../assets/icons/trackChangesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a track changes outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trackChangesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrackChangesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRACKCHANGESOUTLINED }, ...properties);
}

/**
 * Creates a track changes outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trackChangesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTrackChangesOutlinedIcon(element, ...properties);
    return element;
}
