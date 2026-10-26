import { initIcon } from "./icon.js";

//the url of the fmd good svg; resolved relative to this module
const URL_FMDGOOD = new URL('../../assets/icons/fmdGood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fmd good icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fmdGood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFmdGoodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FMDGOOD }, ...properties);
}

/**
 * Creates a fmd good icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fmdGoodIcon = (...properties) => {
    const element = document.createElement('div');
    initFmdGoodIcon(element, ...properties);
    return element;
}
