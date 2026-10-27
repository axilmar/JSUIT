import { initIcon } from "./icon.js";

//the url of the alt route svg; resolved relative to this module
const URL_ALTROUTE = new URL('../../assets/icons/altRoute.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alt route icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/altRoute.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAltRouteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'altRouteIcon', url: URL_ALTROUTE }, ...properties);
}

/**
 * Creates an alt route icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const altRouteIcon = (...properties) => {
    const element = document.createElement('div');
    initAltRouteIcon(element, ...properties);
    return element;
}
