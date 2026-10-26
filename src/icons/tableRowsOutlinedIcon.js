import { initIcon } from "./icon.js";

//the url of the table rows outlined svg; resolved relative to this module
const URL_TABLEROWSOUTLINED = new URL('../../assets/icons/tableRowsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table rows outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableRowsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableRowsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABLEROWSOUTLINED }, ...properties);
}

/**
 * Creates a table rows outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableRowsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTableRowsOutlinedIcon(element, ...properties);
    return element;
}
