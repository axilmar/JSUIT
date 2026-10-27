import { initIcon } from "./icon.js";

//the url of the diversity1 svg; resolved relative to this module
const URL_DIVERSITY1 = new URL('../../assets/icons/diversity1.svg', import.meta.url).href;

/**
 * Initializes an icon element as a diversity1 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/diversity1.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiversity1Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'diversity1Icon', url: URL_DIVERSITY1 }, ...properties);
}

/**
 * Creates a diversity1 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diversity1Icon = (...properties) => {
    const element = document.createElement('div');
    initDiversity1Icon(element, ...properties);
    return element;
}
