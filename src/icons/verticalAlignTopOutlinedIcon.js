import { initIcon } from "./icon.js";

//the url of the vertical align top outlined svg; resolved relative to this module
const URL_VERTICALALIGNTOPOUTLINED = new URL('../../assets/icons/verticalAlignTopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical align top outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalAlignTopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalAlignTopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VERTICALALIGNTOPOUTLINED }, ...properties);
}

/**
 * Creates a vertical align top outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalAlignTopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalAlignTopOutlinedIcon(element, ...properties);
    return element;
}
