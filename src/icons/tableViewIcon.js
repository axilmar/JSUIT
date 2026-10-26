import { initIcon } from "./icon.js";

//the url of the table view svg; resolved relative to this module
const URL_TABLEVIEW = new URL('../../assets/icons/tableView.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table view icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableView.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableViewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABLEVIEW }, ...properties);
}

/**
 * Creates a table view icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableViewIcon = (...properties) => {
    const element = document.createElement('div');
    initTableViewIcon(element, ...properties);
    return element;
}
