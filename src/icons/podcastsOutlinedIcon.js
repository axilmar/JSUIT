import { initIcon } from "./icon.js";

//the url of the podcasts outlined svg; resolved relative to this module
const URL_PODCASTSOUTLINED = new URL('../../assets/icons/podcastsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a podcasts outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/podcastsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPodcastsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PODCASTSOUTLINED }, ...properties);
}

/**
 * Creates a podcasts outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const podcastsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPodcastsOutlinedIcon(element, ...properties);
    return element;
}
