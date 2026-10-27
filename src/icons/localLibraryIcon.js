import { initIcon } from "./icon.js";

//the url of the local library svg; resolved relative to this module
const URL_LOCALLIBRARY = new URL('../../assets/icons/localLibrary.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local library icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localLibrary.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalLibraryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localLibraryIcon', url: URL_LOCALLIBRARY }, ...properties);
}

/**
 * Creates a local library icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localLibraryIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalLibraryIcon(element, ...properties);
    return element;
}
