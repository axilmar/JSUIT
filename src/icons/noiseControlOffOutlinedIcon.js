import { initIcon } from "./icon.js";

//the url of the noise control off outlined svg; resolved relative to this module
const URL_NOISECONTROLOFFOUTLINED = new URL('../../assets/icons/noiseControlOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a noise control off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noiseControlOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoiseControlOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noiseControlOffOutlinedIcon', url: URL_NOISECONTROLOFFOUTLINED }, ...properties);
}

/**
 * Creates a noise control off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noiseControlOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoiseControlOffOutlinedIcon(element, ...properties);
    return element;
}
