import { initIcon } from "./icon.js";

//the url of the sports score outlined svg; resolved relative to this module
const URL_SPORTSSCOREOUTLINED = new URL('../../assets/icons/sportsScoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports score outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsScoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsScoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsScoreOutlinedIcon', url: URL_SPORTSSCOREOUTLINED }, ...properties);
}

/**
 * Creates a sports score outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsScoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsScoreOutlinedIcon(element, ...properties);
    return element;
}
