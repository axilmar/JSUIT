import { initIcon } from "./icon.js";

//the url of the color lens svg; resolved relative to this module
const URL_COLORLENS = new URL('../../assets/icons/colorLens.svg', import.meta.url).href;

/**
 * Initializes an icon element as a color lens icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/colorLens.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initColorLensIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COLORLENS }, ...properties);
}

/**
 * Creates a color lens icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const colorLensIcon = (...properties) => {
    const element = document.createElement('div');
    initColorLensIcon(element, ...properties);
    return element;
}
