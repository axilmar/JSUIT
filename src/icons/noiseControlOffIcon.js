import { initIcon } from "./icon.js";

//the url of the noise control off svg; resolved relative to this module
const URL_NOISECONTROLOFF = new URL('../../assets/icons/noiseControlOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a noise control off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noiseControlOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoiseControlOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOISECONTROLOFF }, ...properties);
}

/**
 * Creates a noise control off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noiseControlOffIcon = (...properties) => {
    const element = document.createElement('div');
    initNoiseControlOffIcon(element, ...properties);
    return element;
}
