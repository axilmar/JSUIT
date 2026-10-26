import { initIcon } from "./icon.js";

//the url of the panorama wide angle select outlined svg; resolved relative to this module
const URL_PANORAMAWIDEANGLESELECTOUTLINED = new URL('../../assets/icons/panoramaWideAngleSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama wide angle select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaWideAngleSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaWideAngleSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAWIDEANGLESELECTOUTLINED }, ...properties);
}

/**
 * Creates a panorama wide angle select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaWideAngleSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaWideAngleSelectOutlinedIcon(element, ...properties);
    return element;
}
