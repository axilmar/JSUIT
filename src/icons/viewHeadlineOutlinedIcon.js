import { initIcon } from "./icon.js";

//the url of the view headline outlined svg; resolved relative to this module
const URL_VIEWHEADLINEOUTLINED = new URL('../../assets/icons/viewHeadlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view headline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewHeadlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewHeadlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWHEADLINEOUTLINED }, ...properties);
}

/**
 * Creates a view headline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewHeadlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewHeadlineOutlinedIcon(element, ...properties);
    return element;
}
