import { initIcon } from "./icon.js";

//the url of the layers svg; resolved relative to this module
const URL_LAYERS = new URL('../../assets/icons/layers.svg', import.meta.url).href;

/**
 * Initializes an icon element as a layers icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/layers.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLayersIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAYERS }, ...properties);
}

/**
 * Creates a layers icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const layersIcon = (...properties) => {
    const element = document.createElement('div');
    initLayersIcon(element, ...properties);
    return element;
}
