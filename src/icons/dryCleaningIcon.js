import { initIcon } from "./icon.js";

//the url of the dry cleaning svg; resolved relative to this module
const URL_DRYCLEANING = new URL('../../assets/icons/dryCleaning.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dry cleaning icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dryCleaning.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDryCleaningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRYCLEANING }, ...properties);
}

/**
 * Creates a dry cleaning icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dryCleaningIcon = (...properties) => {
    const element = document.createElement('div');
    initDryCleaningIcon(element, ...properties);
    return element;
}
