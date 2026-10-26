import { initIcon } from "./icon.js";

//the url of the score svg; resolved relative to this module
const URL_SCORE = new URL('../../assets/icons/score.svg', import.meta.url).href;

/**
 * Initializes an icon element as a score icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/score.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCORE }, ...properties);
}

/**
 * Creates a score icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scoreIcon = (...properties) => {
    const element = document.createElement('div');
    initScoreIcon(element, ...properties);
    return element;
}
