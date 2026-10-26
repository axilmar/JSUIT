import { initIcon } from "./icon.js";

//the url of the space dashboard svg; resolved relative to this module
const URL_SPACEDASHBOARD = new URL('../../assets/icons/spaceDashboard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a space dashboard icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spaceDashboard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpaceDashboardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPACEDASHBOARD }, ...properties);
}

/**
 * Creates a space dashboard icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spaceDashboardIcon = (...properties) => {
    const element = document.createElement('div');
    initSpaceDashboardIcon(element, ...properties);
    return element;
}
