import { initIcon } from "./icon.js";

//the url of the auto stories outlined svg; resolved relative to this module
const URL_AUTOSTORIESOUTLINED = new URL('../../assets/icons/autoStoriesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto stories outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoStoriesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoStoriesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOSTORIESOUTLINED }, ...properties);
}

/**
 * Creates an auto stories outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoStoriesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoStoriesOutlinedIcon(element, ...properties);
    return element;
}
