import { initIcon } from "./icon.js";

//the url of the query stats outlined svg; resolved relative to this module
const URL_QUERYSTATSOUTLINED = new URL('../../assets/icons/queryStatsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a query stats outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queryStatsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueryStatsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'queryStatsOutlinedIcon', url: URL_QUERYSTATSOUTLINED }, ...properties);
}

/**
 * Creates a query stats outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queryStatsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQueryStatsOutlinedIcon(element, ...properties);
    return element;
}
