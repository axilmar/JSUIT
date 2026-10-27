import { initIcon } from "./icon.js";

//the url of the query builder outlined svg; resolved relative to this module
const URL_QUERYBUILDEROUTLINED = new URL('../../assets/icons/queryBuilderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a query builder outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queryBuilderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueryBuilderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'queryBuilderOutlinedIcon', url: URL_QUERYBUILDEROUTLINED }, ...properties);
}

/**
 * Creates a query builder outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queryBuilderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQueryBuilderOutlinedIcon(element, ...properties);
    return element;
}
