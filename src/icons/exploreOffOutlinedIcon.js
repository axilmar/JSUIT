import { initIcon } from "./icon.js";

//the url of the explore off outlined svg; resolved relative to this module
const URL_EXPLOREOFFOUTLINED = new URL('../../assets/icons/exploreOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an explore off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/exploreOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExploreOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPLOREOFFOUTLINED }, ...properties);
}

/**
 * Creates an explore off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const exploreOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExploreOffOutlinedIcon(element, ...properties);
    return element;
}
