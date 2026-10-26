import { initIcon } from "./icon.js";

//the url of the album outlined svg; resolved relative to this module
const URL_ALBUMOUTLINED = new URL('../../assets/icons/albumOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an album outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/albumOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlbumOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALBUMOUTLINED }, ...properties);
}

/**
 * Creates an album outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const albumOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAlbumOutlinedIcon(element, ...properties);
    return element;
}
