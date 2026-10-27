import { initIcon } from "./icon.js";

//the url of the podcasts svg; resolved relative to this module
const URL_PODCASTS = new URL('../../assets/icons/podcasts.svg', import.meta.url).href;

/**
 * Initializes an icon element as a podcasts icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/podcasts.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPodcastsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'podcastsIcon', url: URL_PODCASTS }, ...properties);
}

/**
 * Creates a podcasts icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const podcastsIcon = (...properties) => {
    const element = document.createElement('div');
    initPodcastsIcon(element, ...properties);
    return element;
}
