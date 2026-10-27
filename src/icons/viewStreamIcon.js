import { initIcon } from "./icon.js";

//the url of the view stream svg; resolved relative to this module
const URL_VIEWSTREAM = new URL('../../assets/icons/viewStream.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view stream icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewStream.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewStreamIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewStreamIcon', url: URL_VIEWSTREAM }, ...properties);
}

/**
 * Creates a view stream icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewStreamIcon = (...properties) => {
    const element = document.createElement('div');
    initViewStreamIcon(element, ...properties);
    return element;
}
