import { initIcon } from "./icon.js";

//the url of the view sidebar outlined svg; resolved relative to this module
const URL_VIEWSIDEBAROUTLINED = new URL('../../assets/icons/viewSidebarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view sidebar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewSidebarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewSidebarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWSIDEBAROUTLINED }, ...properties);
}

/**
 * Creates a view sidebar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewSidebarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewSidebarOutlinedIcon(element, ...properties);
    return element;
}
