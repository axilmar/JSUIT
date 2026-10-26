import { initIcon } from "./icon.js";

//the url of the view column outlined svg; resolved relative to this module
const URL_VIEWCOLUMNOUTLINED = new URL('../../assets/icons/viewColumnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view column outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewColumnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewColumnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWCOLUMNOUTLINED }, ...properties);
}

/**
 * Creates a view column outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewColumnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewColumnOutlinedIcon(element, ...properties);
    return element;
}
