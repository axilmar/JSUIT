import { initIcon } from "./icon.js";

//the url of the dashboard svg; resolved relative to this module
const URL_DASHBOARD = new URL('../../assets/icons/dashboard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dashboard icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dashboard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDashboardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DASHBOARD }, ...properties);
}

/**
 * Creates a dashboard icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dashboardIcon = (...properties) => {
    const element = document.createElement('div');
    initDashboardIcon(element, ...properties);
    return element;
}
