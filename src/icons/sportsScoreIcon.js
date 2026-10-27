import { initIcon } from "./icon.js";

//the url of the sports score svg; resolved relative to this module
const URL_SPORTSSCORE = new URL('../../assets/icons/sportsScore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports score icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsScore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsScoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsScoreIcon', url: URL_SPORTSSCORE }, ...properties);
}

/**
 * Creates a sports score icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsScoreIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsScoreIcon(element, ...properties);
    return element;
}
