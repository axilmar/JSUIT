import { initIcon } from "./icon.js";

//the url of the park svg; resolved relative to this module
const URL_PARK = new URL('../../assets/icons/park.svg', import.meta.url).href;

/**
 * Initializes an icon element as a park icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/park.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initParkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'parkIcon', url: URL_PARK }, ...properties);
}

/**
 * Creates a park icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const parkIcon = (...properties) => {
    const element = document.createElement('div');
    initParkIcon(element, ...properties);
    return element;
}
