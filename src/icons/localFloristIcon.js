import { initIcon } from "./icon.js";

//the url of the local florist svg; resolved relative to this module
const URL_LOCALFLORIST = new URL('../../assets/icons/localFlorist.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local florist icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localFlorist.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalFloristIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALFLORIST }, ...properties);
}

/**
 * Creates a local florist icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localFloristIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalFloristIcon(element, ...properties);
    return element;
}
