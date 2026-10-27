import { initIcon } from "./icon.js";

//the url of the terrain svg; resolved relative to this module
const URL_TERRAIN = new URL('../../assets/icons/terrain.svg', import.meta.url).href;

/**
 * Initializes an icon element as a terrain icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/terrain.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTerrainIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'terrainIcon', url: URL_TERRAIN }, ...properties);
}

/**
 * Creates a terrain icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const terrainIcon = (...properties) => {
    const element = document.createElement('div');
    initTerrainIcon(element, ...properties);
    return element;
}
