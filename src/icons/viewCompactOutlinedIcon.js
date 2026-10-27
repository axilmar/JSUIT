import { initIcon } from "./icon.js";

//the url of the view compact outlined svg; resolved relative to this module
const URL_VIEWCOMPACTOUTLINED = new URL('../../assets/icons/viewCompactOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view compact outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewCompactOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewCompactOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewCompactOutlinedIcon', url: URL_VIEWCOMPACTOUTLINED }, ...properties);
}

/**
 * Creates a view compact outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewCompactOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewCompactOutlinedIcon(element, ...properties);
    return element;
}
