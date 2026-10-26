import { initIcon } from "./icon.js";

//the url of the diversity3 svg; resolved relative to this module
const URL_DIVERSITY3 = new URL('../../assets/icons/diversity3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a diversity3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/diversity3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiversity3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIVERSITY3 }, ...properties);
}

/**
 * Creates a diversity3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diversity3Icon = (...properties) => {
    const element = document.createElement('div');
    initDiversity3Icon(element, ...properties);
    return element;
}
