import { initIcon } from "./icon.js";

//the url of the radar svg; resolved relative to this module
const URL_RADAR = new URL('../../assets/icons/radar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'radarIcon', url: URL_RADAR }, ...properties);
}

/**
 * Creates a radar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radarIcon = (...properties) => {
    const element = document.createElement('div');
    initRadarIcon(element, ...properties);
    return element;
}
