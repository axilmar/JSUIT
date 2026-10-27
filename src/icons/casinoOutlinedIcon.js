import { initIcon } from "./icon.js";

//the url of the casino outlined svg; resolved relative to this module
const URL_CASINOOUTLINED = new URL('../../assets/icons/casinoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a casino outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/casinoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCasinoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'casinoOutlinedIcon', url: URL_CASINOOUTLINED }, ...properties);
}

/**
 * Creates a casino outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const casinoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCasinoOutlinedIcon(element, ...properties);
    return element;
}
