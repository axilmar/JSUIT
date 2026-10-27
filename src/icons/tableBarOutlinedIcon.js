import { initIcon } from "./icon.js";

//the url of the table bar outlined svg; resolved relative to this module
const URL_TABLEBAROUTLINED = new URL('../../assets/icons/tableBarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableBarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableBarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tableBarOutlinedIcon', url: URL_TABLEBAROUTLINED }, ...properties);
}

/**
 * Creates a table bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableBarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTableBarOutlinedIcon(element, ...properties);
    return element;
}
