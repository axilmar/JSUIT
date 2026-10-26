import { initIcon } from "./icon.js";

//the url of the local library outlined svg; resolved relative to this module
const URL_LOCALLIBRARYOUTLINED = new URL('../../assets/icons/localLibraryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local library outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localLibraryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalLibraryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALLIBRARYOUTLINED }, ...properties);
}

/**
 * Creates a local library outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localLibraryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalLibraryOutlinedIcon(element, ...properties);
    return element;
}
