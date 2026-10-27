import { initIcon } from "./icon.js";

//the url of the route outlined svg; resolved relative to this module
const URL_ROUTEOUTLINED = new URL('../../assets/icons/routeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a route outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/routeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRouteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'routeOutlinedIcon', url: URL_ROUTEOUTLINED }, ...properties);
}

/**
 * Creates a route outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const routeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRouteOutlinedIcon(element, ...properties);
    return element;
}
