import { initIcon } from "./icon.js";

//the url of the view quilt svg; resolved relative to this module
const URL_VIEWQUILT = new URL('../../assets/icons/viewQuilt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view quilt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewQuilt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewQuiltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewQuiltIcon', url: URL_VIEWQUILT }, ...properties);
}

/**
 * Creates a view quilt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewQuiltIcon = (...properties) => {
    const element = document.createElement('div');
    initViewQuiltIcon(element, ...properties);
    return element;
}
