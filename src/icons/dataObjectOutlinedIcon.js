import { initIcon } from "./icon.js";

//the url of the data object outlined svg; resolved relative to this module
const URL_DATAOBJECTOUTLINED = new URL('../../assets/icons/dataObjectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data object outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataObjectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataObjectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATAOBJECTOUTLINED }, ...properties);
}

/**
 * Creates a data object outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataObjectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDataObjectOutlinedIcon(element, ...properties);
    return element;
}
