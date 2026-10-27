import { initIcon } from "./icon.js";

//the url of the build outlined svg; resolved relative to this module
const URL_BUILDOUTLINED = new URL('../../assets/icons/buildOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a build outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/buildOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBuildOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'buildOutlinedIcon', url: URL_BUILDOUTLINED }, ...properties);
}

/**
 * Creates a build outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const buildOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBuildOutlinedIcon(element, ...properties);
    return element;
}
