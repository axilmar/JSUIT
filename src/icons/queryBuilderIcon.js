import { initIcon } from "./icon.js";

//the url of the query builder svg; resolved relative to this module
const URL_QUERYBUILDER = new URL('../../assets/icons/queryBuilder.svg', import.meta.url).href;

/**
 * Initializes an icon element as a query builder icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/queryBuilder.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQueryBuilderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUERYBUILDER }, ...properties);
}

/**
 * Creates a query builder icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const queryBuilderIcon = (...properties) => {
    const element = document.createElement('div');
    initQueryBuilderIcon(element, ...properties);
    return element;
}
