import { initIcon } from "./icon.js";

//the url of the icecream svg; resolved relative to this module
const URL_ICECREAM = new URL('../../assets/icons/icecream.svg', import.meta.url).href;

/**
 * Initializes an icon element as an icecream icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/icecream.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIcecreamIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'icecreamIcon', url: URL_ICECREAM }, ...properties);
}

/**
 * Creates an icecream icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const icecreamIcon = (...properties) => {
    const element = document.createElement('div');
    initIcecreamIcon(element, ...properties);
    return element;
}
