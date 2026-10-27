import { initIcon } from "./icon.js";

//the url of the online prediction outlined svg; resolved relative to this module
const URL_ONLINEPREDICTIONOUTLINED = new URL('../../assets/icons/onlinePredictionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an online prediction outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/onlinePredictionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOnlinePredictionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'onlinePredictionOutlinedIcon', url: URL_ONLINEPREDICTIONOUTLINED }, ...properties);
}

/**
 * Creates an online prediction outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const onlinePredictionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOnlinePredictionOutlinedIcon(element, ...properties);
    return element;
}
