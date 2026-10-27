import { initIcon } from "./icon.js";

//the url of the rate review svg; resolved relative to this module
const URL_RATEREVIEW = new URL('../../assets/icons/rateReview.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rate review icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rateReview.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRateReviewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rateReviewIcon', url: URL_RATEREVIEW }, ...properties);
}

/**
 * Creates a rate review icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rateReviewIcon = (...properties) => {
    const element = document.createElement('div');
    initRateReviewIcon(element, ...properties);
    return element;
}
