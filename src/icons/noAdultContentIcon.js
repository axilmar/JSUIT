import { initIcon } from "./icon.js";

//the url of the no adult content svg; resolved relative to this module
const URL_NOADULTCONTENT = new URL('../../assets/icons/noAdultContent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no adult content icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noAdultContent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoAdultContentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noAdultContentIcon', url: URL_NOADULTCONTENT }, ...properties);
}

/**
 * Creates a no adult content icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noAdultContentIcon = (...properties) => {
    const element = document.createElement('div');
    initNoAdultContentIcon(element, ...properties);
    return element;
}
