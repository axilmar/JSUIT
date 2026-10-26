import { initIcon } from "./icon.js";

//the url of the spatial audio svg; resolved relative to this module
const URL_SPATIALAUDIO = new URL('../../assets/icons/spatialAudio.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spatial audio icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spatialAudio.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpatialAudioIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPATIALAUDIO }, ...properties);
}

/**
 * Creates a spatial audio icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spatialAudioIcon = (...properties) => {
    const element = document.createElement('div');
    initSpatialAudioIcon(element, ...properties);
    return element;
}
