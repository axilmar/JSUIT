import { initIcon } from "./icon.js";

//the url of the clean hands outlined svg; resolved relative to this module
const URL_CLEANHANDSOUTLINED = new URL('../../assets/icons/cleanHandsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a clean hands outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cleanHandsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCleanHandsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLEANHANDSOUTLINED }, ...properties);
}

/**
 * Creates a clean hands outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cleanHandsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCleanHandsOutlinedIcon(element, ...properties);
    return element;
}
