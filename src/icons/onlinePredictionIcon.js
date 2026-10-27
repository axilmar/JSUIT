import { initIcon } from "./icon.js";

//the url of the online prediction svg; resolved relative to this module
const URL_ONLINEPREDICTION = new URL('../../assets/icons/onlinePrediction.svg', import.meta.url).href;

/**
 * Initializes an icon element as an online prediction icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/onlinePrediction.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOnlinePredictionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'onlinePredictionIcon', url: URL_ONLINEPREDICTION }, ...properties);
}

/**
 * Creates an online prediction icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const onlinePredictionIcon = (...properties) => {
    const element = document.createElement('div');
    initOnlinePredictionIcon(element, ...properties);
    return element;
}
