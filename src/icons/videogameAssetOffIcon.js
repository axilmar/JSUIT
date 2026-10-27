import { initIcon } from "./icon.js";

//the url of the videogame asset off svg; resolved relative to this module
const URL_VIDEOGAMEASSETOFF = new URL('../../assets/icons/videogameAssetOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videogame asset off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videogameAssetOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideogameAssetOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videogameAssetOffIcon', url: URL_VIDEOGAMEASSETOFF }, ...properties);
}

/**
 * Creates a videogame asset off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videogameAssetOffIcon = (...properties) => {
    const element = document.createElement('div');
    initVideogameAssetOffIcon(element, ...properties);
    return element;
}
