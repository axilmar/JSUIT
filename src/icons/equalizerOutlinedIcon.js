import { initIcon } from "./icon.js";

//the url of the equalizer outlined svg; resolved relative to this module
const URL_EQUALIZEROUTLINED = new URL('../../assets/icons/equalizerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an equalizer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/equalizerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEqualizerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'equalizerOutlinedIcon', url: URL_EQUALIZEROUTLINED }, ...properties);
}

/**
 * Creates an equalizer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const equalizerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEqualizerOutlinedIcon(element, ...properties);
    return element;
}
