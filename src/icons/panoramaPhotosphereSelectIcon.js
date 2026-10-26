import { initIcon } from "./icon.js";

//the url of the panorama photosphere select svg; resolved relative to this module
const URL_PANORAMAPHOTOSPHERESELECT = new URL('../../assets/icons/panoramaPhotosphereSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama photosphere select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaPhotosphereSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaPhotosphereSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PANORAMAPHOTOSPHERESELECT }, ...properties);
}

/**
 * Creates a panorama photosphere select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaPhotosphereSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaPhotosphereSelectIcon(element, ...properties);
    return element;
}
