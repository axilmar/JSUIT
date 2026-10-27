import { initIcon } from "./icon.js";

//the url of the dynamic feed svg; resolved relative to this module
const URL_DYNAMICFEED = new URL('../../assets/icons/dynamicFeed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dynamic feed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dynamicFeed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDynamicFeedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dynamicFeedIcon', url: URL_DYNAMICFEED }, ...properties);
}

/**
 * Creates a dynamic feed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dynamicFeedIcon = (...properties) => {
    const element = document.createElement('div');
    initDynamicFeedIcon(element, ...properties);
    return element;
}
