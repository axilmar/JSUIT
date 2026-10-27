import { initIcon } from "./icon.js";

//the url of the airplay svg; resolved relative to this module
const URL_AIRPLAY = new URL('../../assets/icons/airplay.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplay icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplay.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airplayIcon', url: URL_AIRPLAY }, ...properties);
}

/**
 * Creates an airplay icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplayIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplayIcon(element, ...properties);
    return element;
}
