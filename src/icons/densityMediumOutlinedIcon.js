import { initIcon } from "./icon.js";

//the url of the density medium outlined svg; resolved relative to this module
const URL_DENSITYMEDIUMOUTLINED = new URL('../../assets/icons/densityMediumOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a density medium outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/densityMediumOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDensityMediumOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DENSITYMEDIUMOUTLINED }, ...properties);
}

/**
 * Creates a density medium outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const densityMediumOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDensityMediumOutlinedIcon(element, ...properties);
    return element;
}
