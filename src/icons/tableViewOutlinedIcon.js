import { initIcon } from "./icon.js";

//the url of the table view outlined svg; resolved relative to this module
const URL_TABLEVIEWOUTLINED = new URL('../../assets/icons/tableViewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table view outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableViewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableViewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABLEVIEWOUTLINED }, ...properties);
}

/**
 * Creates a table view outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableViewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTableViewOutlinedIcon(element, ...properties);
    return element;
}
