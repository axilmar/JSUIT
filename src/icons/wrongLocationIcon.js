import { initIcon } from "./icon.js";

//the url of the wrong location svg; resolved relative to this module
const URL_WRONGLOCATION = new URL('../../assets/icons/wrongLocation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wrong location icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wrongLocation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWrongLocationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WRONGLOCATION }, ...properties);
}

/**
 * Creates a wrong location icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wrongLocationIcon = (...properties) => {
    const element = document.createElement('div');
    initWrongLocationIcon(element, ...properties);
    return element;
}
