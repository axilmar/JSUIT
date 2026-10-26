import { initIcon } from "./icon.js";

//the url of the diversity2 svg; resolved relative to this module
const URL_DIVERSITY2 = new URL('../../assets/icons/diversity2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a diversity2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/diversity2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiversity2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIVERSITY2 }, ...properties);
}

/**
 * Creates a diversity2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diversity2Icon = (...properties) => {
    const element = document.createElement('div');
    initDiversity2Icon(element, ...properties);
    return element;
}
