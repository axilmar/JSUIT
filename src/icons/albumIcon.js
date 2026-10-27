import { initIcon } from "./icon.js";

//the url of the album svg; resolved relative to this module
const URL_ALBUM = new URL('../../assets/icons/album.svg', import.meta.url).href;

/**
 * Initializes an icon element as an album icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/album.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlbumIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'albumIcon', url: URL_ALBUM }, ...properties);
}

/**
 * Creates an album icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const albumIcon = (...properties) => {
    const element = document.createElement('div');
    initAlbumIcon(element, ...properties);
    return element;
}
