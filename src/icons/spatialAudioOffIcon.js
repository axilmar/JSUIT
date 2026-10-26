import { initIcon } from "./icon.js";

//the url of the spatial audio off svg; resolved relative to this module
const URL_SPATIALAUDIOOFF = new URL('../../assets/icons/spatialAudioOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spatial audio off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spatialAudioOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpatialAudioOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPATIALAUDIOOFF }, ...properties);
}

/**
 * Creates a spatial audio off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spatialAudioOffIcon = (...properties) => {
    const element = document.createElement('div');
    initSpatialAudioOffIcon(element, ...properties);
    return element;
}
