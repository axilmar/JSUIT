import { initIcon } from "./icon.js";

//the url of the panorama vertical select outlined svg; resolved relative to this module
const URL_PANORAMAVERTICALSELECTOUTLINED = new URL('../../assets/icons/panoramaVerticalSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a panorama vertical select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panoramaVerticalSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanoramaVerticalSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panoramaVerticalSelectOutlinedIcon', url: URL_PANORAMAVERTICALSELECTOUTLINED }, ...properties);
}

/**
 * Creates a panorama vertical select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panoramaVerticalSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanoramaVerticalSelectOutlinedIcon(element, ...properties);
    return element;
}
