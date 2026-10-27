import { initIcon } from "./icon.js";

//the url of the sort by alpha outlined svg; resolved relative to this module
const URL_SORTBYALPHAOUTLINED = new URL('../../assets/icons/sortByAlphaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sort by alpha outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sortByAlphaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSortByAlphaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sortByAlphaOutlinedIcon', url: URL_SORTBYALPHAOUTLINED }, ...properties);
}

/**
 * Creates a sort by alpha outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sortByAlphaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSortByAlphaOutlinedIcon(element, ...properties);
    return element;
}
