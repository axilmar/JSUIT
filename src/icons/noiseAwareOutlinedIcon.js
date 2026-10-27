import { initIcon } from "./icon.js";

//the url of the noise aware outlined svg; resolved relative to this module
const URL_NOISEAWAREOUTLINED = new URL('../../assets/icons/noiseAwareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a noise aware outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noiseAwareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoiseAwareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noiseAwareOutlinedIcon', url: URL_NOISEAWAREOUTLINED }, ...properties);
}

/**
 * Creates a noise aware outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noiseAwareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoiseAwareOutlinedIcon(element, ...properties);
    return element;
}
