import { initIcon } from "./icon.js";

//the url of the water drop svg; resolved relative to this module
const URL_WATERDROP = new URL('../../assets/icons/waterDrop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a water drop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waterDrop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterDropIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WATERDROP }, ...properties);
}

/**
 * Creates a water drop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterDropIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterDropIcon(element, ...properties);
    return element;
}
