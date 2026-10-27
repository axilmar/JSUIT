import { initIcon } from "./icon.js";

//the url of the router outlined svg; resolved relative to this module
const URL_ROUTEROUTLINED = new URL('../../assets/icons/routerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a router outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/routerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRouterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'routerOutlinedIcon', url: URL_ROUTEROUTLINED }, ...properties);
}

/**
 * Creates a router outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const routerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRouterOutlinedIcon(element, ...properties);
    return element;
}
