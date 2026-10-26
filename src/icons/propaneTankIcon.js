import { initIcon } from "./icon.js";

//the url of the propane tank svg; resolved relative to this module
const URL_PROPANETANK = new URL('../../assets/icons/propaneTank.svg', import.meta.url).href;

/**
 * Initializes an icon element as a propane tank icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/propaneTank.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPropaneTankIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PROPANETANK }, ...properties);
}

/**
 * Creates a propane tank icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const propaneTankIcon = (...properties) => {
    const element = document.createElement('div');
    initPropaneTankIcon(element, ...properties);
    return element;
}
