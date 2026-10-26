import { initIcon } from "./icon.js";

//the url of the maps home work outlined svg; resolved relative to this module
const URL_MAPSHOMEWORKOUTLINED = new URL('../../assets/icons/mapsHomeWorkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a maps home work outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mapsHomeWorkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMapsHomeWorkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAPSHOMEWORKOUTLINED }, ...properties);
}

/**
 * Creates a maps home work outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mapsHomeWorkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMapsHomeWorkOutlinedIcon(element, ...properties);
    return element;
}
