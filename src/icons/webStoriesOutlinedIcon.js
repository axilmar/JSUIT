import { initIcon } from "./icon.js";

//the url of the web stories outlined svg; resolved relative to this module
const URL_WEBSTORIESOUTLINED = new URL('../../assets/icons/webStoriesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web stories outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webStoriesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebStoriesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webStoriesOutlinedIcon', url: URL_WEBSTORIESOUTLINED }, ...properties);
}

/**
 * Creates a web stories outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webStoriesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWebStoriesOutlinedIcon(element, ...properties);
    return element;
}
