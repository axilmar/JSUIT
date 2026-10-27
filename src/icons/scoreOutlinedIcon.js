import { initIcon } from "./icon.js";

//the url of the score outlined svg; resolved relative to this module
const URL_SCOREOUTLINED = new URL('../../assets/icons/scoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a score outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'scoreOutlinedIcon', url: URL_SCOREOUTLINED }, ...properties);
}

/**
 * Creates a score outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScoreOutlinedIcon(element, ...properties);
    return element;
}
