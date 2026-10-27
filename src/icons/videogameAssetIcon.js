import { initIcon } from "./icon.js";

//the url of the videogame asset svg; resolved relative to this module
const URL_VIDEOGAMEASSET = new URL('../../assets/icons/videogameAsset.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videogame asset icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videogameAsset.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideogameAssetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videogameAssetIcon', url: URL_VIDEOGAMEASSET }, ...properties);
}

/**
 * Creates a videogame asset icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videogameAssetIcon = (...properties) => {
    const element = document.createElement('div');
    initVideogameAssetIcon(element, ...properties);
    return element;
}
