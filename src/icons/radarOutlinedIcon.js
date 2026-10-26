import { initIcon } from "./icon.js";

//the url of the radar outlined svg; resolved relative to this module
const URL_RADAROUTLINED = new URL('../../assets/icons/radarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RADAROUTLINED }, ...properties);
}

/**
 * Creates a radar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRadarOutlinedIcon(element, ...properties);
    return element;
}
