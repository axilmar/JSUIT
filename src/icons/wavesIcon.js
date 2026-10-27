import { initIcon } from "./icon.js";

//the url of the waves svg; resolved relative to this module
const URL_WAVES = new URL('../../assets/icons/waves.svg', import.meta.url).href;

/**
 * Initializes an icon element as a waves icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waves.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWavesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wavesIcon', url: URL_WAVES }, ...properties);
}

/**
 * Creates a waves icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wavesIcon = (...properties) => {
    const element = document.createElement('div');
    initWavesIcon(element, ...properties);
    return element;
}
