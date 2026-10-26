import { initIcon } from "./icon.js";

//the url of the router svg; resolved relative to this module
const URL_ROUTER = new URL('../../assets/icons/router.svg', import.meta.url).href;

/**
 * Initializes an icon element as a router icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/router.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRouterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROUTER }, ...properties);
}

/**
 * Creates a router icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const routerIcon = (...properties) => {
    const element = document.createElement('div');
    initRouterIcon(element, ...properties);
    return element;
}
