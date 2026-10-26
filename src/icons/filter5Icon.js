import { initIcon } from "./icon.js";

//the url of the filter5 svg; resolved relative to this module
const URL_FILTER5 = new URL('../../assets/icons/filter5.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter5 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filter5.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter5Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTER5 }, ...properties);
}

/**
 * Creates a filter5 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filter5Icon = (...properties) => {
    const element = document.createElement('div');
    initFilter5Icon(element, ...properties);
    return element;
}
