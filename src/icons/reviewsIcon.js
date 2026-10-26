import { initIcon } from "./icon.js";

//the url of the reviews svg; resolved relative to this module
const URL_REVIEWS = new URL('../../assets/icons/reviews.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reviews icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/reviews.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReviewsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REVIEWS }, ...properties);
}

/**
 * Creates a reviews icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const reviewsIcon = (...properties) => {
    const element = document.createElement('div');
    initReviewsIcon(element, ...properties);
    return element;
}
