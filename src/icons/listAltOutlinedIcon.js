import { initIcon } from "./icon.js";

//the url of the list alt outlined svg; resolved relative to this module
const URL_LISTALTOUTLINED = new URL('../../assets/icons/listAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a list alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/listAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initListAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LISTALTOUTLINED }, ...properties);
}

/**
 * Creates a list alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const listAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initListAltOutlinedIcon(element, ...properties);
    return element;
}
