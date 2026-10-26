import { initIcon } from "./icon.js";

//the url of the featured play list svg; resolved relative to this module
const URL_FEATUREDPLAYLIST = new URL('../../assets/icons/featuredPlayList.svg', import.meta.url).href;

/**
 * Initializes an icon element as a featured play list icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/featuredPlayList.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeaturedPlayListIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FEATUREDPLAYLIST }, ...properties);
}

/**
 * Creates a featured play list icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const featuredPlayListIcon = (...properties) => {
    const element = document.createElement('div');
    initFeaturedPlayListIcon(element, ...properties);
    return element;
}
