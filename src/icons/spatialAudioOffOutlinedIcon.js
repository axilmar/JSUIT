import { initIcon } from "./icon.js";

//the url of the spatial audio off outlined svg; resolved relative to this module
const URL_SPATIALAUDIOOFFOUTLINED = new URL('../../assets/icons/spatialAudioOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spatial audio off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spatialAudioOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpatialAudioOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'spatialAudioOffOutlinedIcon', url: URL_SPATIALAUDIOOFFOUTLINED }, ...properties);
}

/**
 * Creates a spatial audio off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spatialAudioOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpatialAudioOffOutlinedIcon(element, ...properties);
    return element;
}
