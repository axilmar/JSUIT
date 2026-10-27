import { initIcon } from "./icon.js";

//the url of the panorama vertical select svg; resolved relative to this module
const URL_PANORAMAVERTICALSELECT = new URL('../../assets/icons/panoramaVerticalSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama vertical select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaVerticalSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaVerticalSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaVerticalSelectIcon', url: URL_PANORAMAVERTICALSELECT }, ...properties);
}

/**
 * Creates a panorama vertical select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaVerticalSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaVerticalSelectIcon(element, ...properties);
    return element;
}
