import { initIcon } from "./icon.js";

//the url of the library music svg; resolved relative to this module
const URL_LIBRARYMUSIC = new URL('../../assets/icons/libraryMusic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a library music icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/libraryMusic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLibraryMusicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIBRARYMUSIC }, ...properties);
}

/**
 * Creates a library music icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const libraryMusicIcon = (...properties) => {
    const element = document.createElement('div');
    initLibraryMusicIcon(element, ...properties);
    return element;
}
