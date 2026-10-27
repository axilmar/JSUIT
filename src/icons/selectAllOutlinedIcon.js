import { initIcon } from "./icon.js";

//the url of the select all outlined svg; resolved relative to this module
const URL_SELECTALLOUTLINED = new URL('../../assets/icons/selectAllOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a select all outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/selectAllOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSelectAllOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'selectAllOutlinedIcon', url: URL_SELECTALLOUTLINED }, ...properties);
}

/**
 * Creates a select all outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const selectAllOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSelectAllOutlinedIcon(element, ...properties);
    return element;
}
