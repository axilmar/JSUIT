import { initIcon } from "./icon.js";

//the url of the featured play list outlined svg; resolved relative to this module
const URL_FEATUREDPLAYLISTOUTLINED = new URL('../../assets/icons/featuredPlayListOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a featured play list outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/featuredPlayListOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeaturedPlayListOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FEATUREDPLAYLISTOUTLINED }, ...properties);
}

/**
 * Creates a featured play list outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const featuredPlayListOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFeaturedPlayListOutlinedIcon(element, ...properties);
    return element;
}
