import { initIcon } from "./icon.js";

//the url of the table rows svg; resolved relative to this module
const URL_TABLEROWS = new URL('../../assets/icons/tableRows.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table rows icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableRows.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableRowsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tableRowsIcon', url: URL_TABLEROWS }, ...properties);
}

/**
 * Creates a table rows icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableRowsIcon = (...properties) => {
    const element = document.createElement('div');
    initTableRowsIcon(element, ...properties);
    return element;
}
