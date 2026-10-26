import { initIcon } from "./icon.js";

//the url of the build circle svg; resolved relative to this module
const URL_BUILDCIRCLE = new URL('../../assets/icons/buildCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a build circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/buildCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBuildCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUILDCIRCLE }, ...properties);
}

/**
 * Creates a build circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const buildCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initBuildCircleIcon(element, ...properties);
    return element;
}
