import { initIcon } from "./icon.js";

//the url of the spatial audio outlined svg; resolved relative to this module
const URL_SPATIALAUDIOOUTLINED = new URL('../../assets/icons/spatialAudioOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spatial audio outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spatialAudioOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpatialAudioOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPATIALAUDIOOUTLINED }, ...properties);
}

/**
 * Creates a spatial audio outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spatialAudioOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpatialAudioOutlinedIcon(element, ...properties);
    return element;
}
