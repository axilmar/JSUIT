import { initIcon } from "./icon.js";

//the url of the palette outlined svg; resolved relative to this module
const URL_PALETTEOUTLINED = new URL('../../assets/icons/paletteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a palette outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/paletteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaletteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'paletteOutlinedIcon', url: URL_PALETTEOUTLINED }, ...properties);
}

/**
 * Creates a palette outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paletteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPaletteOutlinedIcon(element, ...properties);
    return element;
}
