import { initIcon } from "./icon.js";

//the url of the view day svg; resolved relative to this module
const URL_VIEWDAY = new URL('../../assets/icons/viewDay.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view day icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewDay.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewDayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWDAY }, ...properties);
}

/**
 * Creates a view day icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewDayIcon = (...properties) => {
    const element = document.createElement('div');
    initViewDayIcon(element, ...properties);
    return element;
}
