import { initIcon } from "./icon.js";

//the url of the view list outlined svg; resolved relative to this module
const URL_VIEWLISTOUTLINED = new URL('../../assets/icons/viewListOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view list outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewListOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewListOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWLISTOUTLINED }, ...properties);
}

/**
 * Creates a view list outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewListOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewListOutlinedIcon(element, ...properties);
    return element;
}
