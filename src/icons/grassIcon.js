import { initIcon } from "./icon.js";

//the url of the grass svg; resolved relative to this module
const URL_GRASS = new URL('../../assets/icons/grass.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grass icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grass.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGrassIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'grassIcon', url: URL_GRASS }, ...properties);
}

/**
 * Creates a grass icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const grassIcon = (...properties) => {
    const element = document.createElement('div');
    initGrassIcon(element, ...properties);
    return element;
}
