import { initIcon } from "./icon.js";

//the url of the explore outlined svg; resolved relative to this module
const URL_EXPLOREOUTLINED = new URL('../../assets/icons/exploreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an explore outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/exploreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExploreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPLOREOUTLINED }, ...properties);
}

/**
 * Creates an explore outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const exploreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExploreOutlinedIcon(element, ...properties);
    return element;
}
