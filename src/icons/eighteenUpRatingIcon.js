import { initIcon } from "./icon.js";

//the url of the eighteen up rating svg; resolved relative to this module
const URL_EIGHTEENUPRATING = new URL('../../assets/icons/eighteenUpRating.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eighteen up rating icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eighteenUpRating.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEighteenUpRatingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eighteenUpRatingIcon', url: URL_EIGHTEENUPRATING }, ...properties);
}

/**
 * Creates an eighteen up rating icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eighteenUpRatingIcon = (...properties) => {
    const element = document.createElement('div');
    initEighteenUpRatingIcon(element, ...properties);
    return element;
}
