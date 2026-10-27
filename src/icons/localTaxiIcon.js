import { initIcon } from "./icon.js";

//the url of the local taxi svg; resolved relative to this module
const URL_LOCALTAXI = new URL('../../assets/icons/localTaxi.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local taxi icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localTaxi.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalTaxiIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localTaxiIcon', url: URL_LOCALTAXI }, ...properties);
}

/**
 * Creates a local taxi icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localTaxiIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalTaxiIcon(element, ...properties);
    return element;
}
