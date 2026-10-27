import { initIcon } from "./icon.js";

//the url of the auto stories svg; resolved relative to this module
const URL_AUTOSTORIES = new URL('../../assets/icons/autoStories.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto stories icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoStories.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoStoriesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoStoriesIcon', url: URL_AUTOSTORIES }, ...properties);
}

/**
 * Creates an auto stories icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoStoriesIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoStoriesIcon(element, ...properties);
    return element;
}
