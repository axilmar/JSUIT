import { initIcon } from "./icon.js";

//the url of the featured video outlined svg; resolved relative to this module
const URL_FEATUREDVIDEOOUTLINED = new URL('../../assets/icons/featuredVideoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a featured video outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/featuredVideoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeaturedVideoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'featuredVideoOutlinedIcon', url: URL_FEATUREDVIDEOOUTLINED }, ...properties);
}

/**
 * Creates a featured video outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const featuredVideoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFeaturedVideoOutlinedIcon(element, ...properties);
    return element;
}
