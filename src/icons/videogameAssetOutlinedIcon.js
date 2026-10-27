import { initIcon } from "./icon.js";

//the url of the videogame asset outlined svg; resolved relative to this module
const URL_VIDEOGAMEASSETOUTLINED = new URL('../../assets/icons/videogameAssetOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videogame asset outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videogameAssetOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideogameAssetOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videogameAssetOutlinedIcon', url: URL_VIDEOGAMEASSETOUTLINED }, ...properties);
}

/**
 * Creates a videogame asset outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videogameAssetOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideogameAssetOutlinedIcon(element, ...properties);
    return element;
}
