import { initIcon } from "./icon.js";

//the url of the web stories svg; resolved relative to this module
const URL_WEBSTORIES = new URL('../../assets/icons/webStories.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web stories icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webStories.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebStoriesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webStoriesIcon', url: URL_WEBSTORIES }, ...properties);
}

/**
 * Creates a web stories icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webStoriesIcon = (...properties) => {
    const element = document.createElement('div');
    initWebStoriesIcon(element, ...properties);
    return element;
}
