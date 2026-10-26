import { initIcon } from "./icon.js";

//the url of the vrpano svg; resolved relative to this module
const URL_VRPANO = new URL('../../assets/icons/vrpano.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vrpano icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vrpano.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVrpanoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VRPANO }, ...properties);
}

/**
 * Creates a vrpano icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vrpanoIcon = (...properties) => {
    const element = document.createElement('div');
    initVrpanoIcon(element, ...properties);
    return element;
}
