import { initIcon } from "./icon.js";

//the url of the flutter dash svg; resolved relative to this module
const URL_FLUTTERDASH = new URL('../../assets/icons/flutterDash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flutter dash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flutterDash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlutterDashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flutterDashIcon', url: URL_FLUTTERDASH }, ...properties);
}

/**
 * Creates a flutter dash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flutterDashIcon = (...properties) => {
    const element = document.createElement('div');
    initFlutterDashIcon(element, ...properties);
    return element;
}
