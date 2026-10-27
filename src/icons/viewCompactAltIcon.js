import { initIcon } from "./icon.js";

//the url of the view compact alt svg; resolved relative to this module
const URL_VIEWCOMPACTALT = new URL('../../assets/icons/viewCompactAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view compact alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewCompactAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewCompactAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewCompactAltIcon', url: URL_VIEWCOMPACTALT }, ...properties);
}

/**
 * Creates a view compact alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewCompactAltIcon = (...properties) => {
    const element = document.createElement('div');
    initViewCompactAltIcon(element, ...properties);
    return element;
}
