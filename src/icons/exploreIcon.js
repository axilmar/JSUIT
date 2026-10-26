import { initIcon } from "./icon.js";

//the url of the explore svg; resolved relative to this module
const URL_EXPLORE = new URL('../../assets/icons/explore.svg', import.meta.url).href;

/**
 * Initializes an icon element as an explore icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/explore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExploreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPLORE }, ...properties);
}

/**
 * Creates an explore icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const exploreIcon = (...properties) => {
    const element = document.createElement('div');
    initExploreIcon(element, ...properties);
    return element;
}
