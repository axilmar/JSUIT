import { initIcon } from "./icon.js";

//the url of the terrain outlined svg; resolved relative to this module
const URL_TERRAINOUTLINED = new URL('../../assets/icons/terrainOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a terrain outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/terrainOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTerrainOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'terrainOutlinedIcon', url: URL_TERRAINOUTLINED }, ...properties);
}

/**
 * Creates a terrain outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const terrainOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTerrainOutlinedIcon(element, ...properties);
    return element;
}
