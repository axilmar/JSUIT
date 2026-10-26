import { initIcon } from "./icon.js";

//the url of the free breakfast svg; resolved relative to this module
const URL_FREEBREAKFAST = new URL('../../assets/icons/freeBreakfast.svg', import.meta.url).href;

/**
 * Initializes an icon element as a free breakfast icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/freeBreakfast.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFreeBreakfastIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FREEBREAKFAST }, ...properties);
}

/**
 * Creates a free breakfast icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const freeBreakfastIcon = (...properties) => {
    const element = document.createElement('div');
    initFreeBreakfastIcon(element, ...properties);
    return element;
}
