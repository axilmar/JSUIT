import { initIcon } from "./icon.js";

//the url of the view in ar svg; resolved relative to this module
const URL_VIEWINAR = new URL('../../assets/icons/viewInAr.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view in ar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewInAr.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewInArIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewInArIcon', url: URL_VIEWINAR }, ...properties);
}

/**
 * Creates a view in ar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewInArIcon = (...properties) => {
    const element = document.createElement('div');
    initViewInArIcon(element, ...properties);
    return element;
}
