import { initIcon } from "./icon.js";

//the url of the view column svg; resolved relative to this module
const URL_VIEWCOLUMN = new URL('../../assets/icons/viewColumn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view column icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewColumn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewColumnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewColumnIcon', url: URL_VIEWCOLUMN }, ...properties);
}

/**
 * Creates a view column icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewColumnIcon = (...properties) => {
    const element = document.createElement('div');
    initViewColumnIcon(element, ...properties);
    return element;
}
