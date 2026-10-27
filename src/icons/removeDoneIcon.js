import { initIcon } from "./icon.js";

//the url of the remove done svg; resolved relative to this module
const URL_REMOVEDONE = new URL('../../assets/icons/removeDone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove done icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeDone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveDoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeDoneIcon', url: URL_REMOVEDONE }, ...properties);
}

/**
 * Creates a remove done icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeDoneIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveDoneIcon(element, ...properties);
    return element;
}
