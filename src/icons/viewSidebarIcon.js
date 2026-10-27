import { initIcon } from "./icon.js";

//the url of the view sidebar svg; resolved relative to this module
const URL_VIEWSIDEBAR = new URL('../../assets/icons/viewSidebar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view sidebar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewSidebar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewSidebarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewSidebarIcon', url: URL_VIEWSIDEBAR }, ...properties);
}

/**
 * Creates a view sidebar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewSidebarIcon = (...properties) => {
    const element = document.createElement('div');
    initViewSidebarIcon(element, ...properties);
    return element;
}
