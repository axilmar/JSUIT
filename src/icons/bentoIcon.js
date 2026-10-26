import { initIcon } from "./icon.js";

//the url of the bento svg; resolved relative to this module
const URL_BENTO = new URL('../../assets/icons/bento.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bento icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bento.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBentoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BENTO }, ...properties);
}

/**
 * Creates a bento icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bentoIcon = (...properties) => {
    const element = document.createElement('div');
    initBentoIcon(element, ...properties);
    return element;
}
