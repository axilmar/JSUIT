import { initIcon } from "./icon.js";

//the url of the build svg; resolved relative to this module
const URL_BUILD = new URL('../../assets/icons/build.svg', import.meta.url).href;

/**
 * Initializes an icon element as a build icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/build.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBuildIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUILD }, ...properties);
}

/**
 * Creates a build icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const buildIcon = (...properties) => {
    const element = document.createElement('div');
    initBuildIcon(element, ...properties);
    return element;
}
