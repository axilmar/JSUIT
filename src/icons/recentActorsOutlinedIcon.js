import { initIcon } from "./icon.js";

//the url of the recent actors outlined svg; resolved relative to this module
const URL_RECENTACTORSOUTLINED = new URL('../../assets/icons/recentActorsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a recent actors outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recentActorsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecentActorsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'recentActorsOutlinedIcon', url: URL_RECENTACTORSOUTLINED }, ...properties);
}

/**
 * Creates a recent actors outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recentActorsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRecentActorsOutlinedIcon(element, ...properties);
    return element;
}
