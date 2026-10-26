import { initIcon } from "./icon.js";

//the url of the graphic eq svg; resolved relative to this module
const URL_GRAPHICEQ = new URL('../../assets/icons/graphicEq.svg', import.meta.url).href;

/**
 * Initializes an icon element as a graphic eq icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/graphicEq.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGraphicEqIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRAPHICEQ }, ...properties);
}

/**
 * Creates a graphic eq icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const graphicEqIcon = (...properties) => {
    const element = document.createElement('div');
    initGraphicEqIcon(element, ...properties);
    return element;
}
