import { initIcon } from "./icon.js";

//the url of the panorama photosphere select outlined svg; resolved relative to this module
const URL_PANORAMAPHOTOSPHERESELECTOUTLINED = new URL('../../assets/icons/panoramaPhotosphereSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama photosphere select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaPhotosphereSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaPhotosphereSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaPhotosphereSelectOutlinedIcon', url: URL_PANORAMAPHOTOSPHERESELECTOUTLINED }, ...properties);
}

/**
 * Creates a panorama photosphere select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaPhotosphereSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaPhotosphereSelectOutlinedIcon(element, ...properties);
    return element;
}
