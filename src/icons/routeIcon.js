import { initIcon } from "./icon.js";

//the url of the route svg; resolved relative to this module
const URL_ROUTE = new URL('../../assets/icons/route.svg', import.meta.url).href;

/**
 * Initializes an icon element as a route icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/route.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRouteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'routeIcon', url: URL_ROUTE }, ...properties);
}

/**
 * Creates a route icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const routeIcon = (...properties) => {
    const element = document.createElement('div');
    initRouteIcon(element, ...properties);
    return element;
}
