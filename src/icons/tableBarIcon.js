import { initIcon } from "./icon.js";

//the url of the table bar svg; resolved relative to this module
const URL_TABLEBAR = new URL('../../assets/icons/tableBar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableBar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableBarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABLEBAR }, ...properties);
}

/**
 * Creates a table bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableBarIcon = (...properties) => {
    const element = document.createElement('div');
    initTableBarIcon(element, ...properties);
    return element;
}
