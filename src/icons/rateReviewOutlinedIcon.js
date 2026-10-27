import { initIcon } from "./icon.js";

//the url of the rate review outlined svg; resolved relative to this module
const URL_RATEREVIEWOUTLINED = new URL('../../assets/icons/rateReviewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rate review outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rateReviewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRateReviewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rateReviewOutlinedIcon', url: URL_RATEREVIEWOUTLINED }, ...properties);
}

/**
 * Creates a rate review outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rateReviewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRateReviewOutlinedIcon(element, ...properties);
    return element;
}
