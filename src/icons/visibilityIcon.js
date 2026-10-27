import { initIcon } from "./icon.js";

//the url of the visibility svg; resolved relative to this module
const URL_VISIBILITY = new URL('../../assets/icons/visibility.svg', import.meta.url).href;

/**
 * Initializes an icon element as a visibility icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/visibility.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVisibilityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'visibilityIcon', url: URL_VISIBILITY }, ...properties);
}

/**
 * Creates a visibility icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const visibilityIcon = (...properties) => {
    const element = document.createElement('div');
    initVisibilityIcon(element, ...properties);
    return element;
}
