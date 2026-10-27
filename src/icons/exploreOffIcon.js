import { initIcon } from "./icon.js";

//the url of the explore off svg; resolved relative to this module
const URL_EXPLOREOFF = new URL('../../assets/icons/exploreOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as an explore off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/exploreOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExploreOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'exploreOffIcon', url: URL_EXPLOREOFF }, ...properties);
}

/**
 * Creates an explore off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const exploreOffIcon = (...properties) => {
    const element = document.createElement('div');
    initExploreOffIcon(element, ...properties);
    return element;
}
