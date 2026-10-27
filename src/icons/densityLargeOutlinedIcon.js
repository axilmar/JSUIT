import { initIcon } from "./icon.js";

//the url of the density large outlined svg; resolved relative to this module
const URL_DENSITYLARGEOUTLINED = new URL('../../assets/icons/densityLargeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a density large outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/densityLargeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDensityLargeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'densityLargeOutlinedIcon', url: URL_DENSITYLARGEOUTLINED }, ...properties);
}

/**
 * Creates a density large outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const densityLargeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDensityLargeOutlinedIcon(element, ...properties);
    return element;
}
