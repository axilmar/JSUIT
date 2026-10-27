import { initIcon } from "./icon.js";

//the url of the table chart outlined svg; resolved relative to this module
const URL_TABLECHARTOUTLINED = new URL('../../assets/icons/tableChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tableChartOutlinedIcon', url: URL_TABLECHARTOUTLINED }, ...properties);
}

/**
 * Creates a table chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTableChartOutlinedIcon(element, ...properties);
    return element;
}
