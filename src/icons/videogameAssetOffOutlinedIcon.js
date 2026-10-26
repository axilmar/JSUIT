import { initIcon } from "./icon.js";

//the url of the videogame asset off outlined svg; resolved relative to this module
const URL_VIDEOGAMEASSETOFFOUTLINED = new URL('../../assets/icons/videogameAssetOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videogame asset off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videogameAssetOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideogameAssetOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOGAMEASSETOFFOUTLINED }, ...properties);
}

/**
 * Creates a videogame asset off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videogameAssetOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideogameAssetOffOutlinedIcon(element, ...properties);
    return element;
}
