import { initIcon } from "./icon.js";

//the url of the change circle svg; resolved relative to this module
const URL_CHANGECIRCLE = new URL('../../assets/icons/changeCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a change circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/changeCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChangeCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'changeCircleIcon', url: URL_CHANGECIRCLE }, ...properties);
}

/**
 * Creates a change circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const changeCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initChangeCircleIcon(element, ...properties);
    return element;
}
