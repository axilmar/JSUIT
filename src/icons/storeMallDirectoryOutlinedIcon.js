import { initIcon } from "./icon.js";

//the url of the store mall directory outlined svg; resolved relative to this module
const URL_STOREMALLDIRECTORYOUTLINED = new URL('../../assets/icons/storeMallDirectoryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a store mall directory outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storeMallDirectoryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStoreMallDirectoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'storeMallDirectoryOutlinedIcon', url: URL_STOREMALLDIRECTORYOUTLINED }, ...properties);
}

/**
 * Creates a store mall directory outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storeMallDirectoryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStoreMallDirectoryOutlinedIcon(element, ...properties);
    return element;
}
