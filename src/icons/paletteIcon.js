import { initIcon } from "./icon.js";

//the url of the palette svg; resolved relative to this module
const URL_PALETTE = new URL('../../assets/icons/palette.svg', import.meta.url).href;

/**
 * Initializes an icon element as a palette icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/palette.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaletteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PALETTE }, ...properties);
}

/**
 * Creates a palette icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paletteIcon = (...properties) => {
    const element = document.createElement('div');
    initPaletteIcon(element, ...properties);
    return element;
}
