import { initIcon } from "./icon.js";

//the url of the track changes svg; resolved relative to this module
const URL_TRACKCHANGES = new URL('../../assets/icons/trackChanges.svg', import.meta.url).href;

/**
 * Initializes an icon element as a track changes icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trackChanges.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrackChangesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'trackChangesIcon', url: URL_TRACKCHANGES }, ...properties);
}

/**
 * Creates a track changes icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trackChangesIcon = (...properties) => {
    const element = document.createElement('div');
    initTrackChangesIcon(element, ...properties);
    return element;
}
