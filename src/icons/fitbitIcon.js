import { initIcon } from "./icon.js";

//the url of the fitbit svg; resolved relative to this module
const URL_FITBIT = new URL('../../assets/icons/fitbit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fitbit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fitbit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFitbitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fitbitIcon', url: URL_FITBIT }, ...properties);
}

/**
 * Creates a fitbit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fitbitIcon = (...properties) => {
    const element = document.createElement('div');
    initFitbitIcon(element, ...properties);
    return element;
}
