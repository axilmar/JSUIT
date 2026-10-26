import { initIcon } from "./icon.js";

//the url of the portrait outlined svg; resolved relative to this module
const URL_PORTRAITOUTLINED = new URL('../../assets/icons/portraitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a portrait outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/portraitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPortraitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PORTRAITOUTLINED }, ...properties);
}

/**
 * Creates a portrait outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const portraitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPortraitOutlinedIcon(element, ...properties);
    return element;
}
