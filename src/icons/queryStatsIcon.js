import { initIcon } from "./icon.js";

//the url of the query stats svg; resolved relative to this module
const URL_QUERYSTATS = new URL('../../assets/icons/queryStats.svg', import.meta.url).href;

/**
 * Initializes an icon element as a query stats icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queryStats.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueryStatsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUERYSTATS }, ...properties);
}

/**
 * Creates a query stats icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queryStatsIcon = (...properties) => {
    const element = document.createElement('div');
    initQueryStatsIcon(element, ...properties);
    return element;
}
