import { initIcon } from "./icon.js";

//the url of the local post office outlined svg; resolved relative to this module
const URL_LOCALPOSTOFFICEOUTLINED = new URL('../../assets/icons/localPostOfficeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local post office outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPostOfficeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPostOfficeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALPOSTOFFICEOUTLINED }, ...properties);
}

/**
 * Creates a local post office outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPostOfficeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPostOfficeOutlinedIcon(element, ...properties);
    return element;
}
