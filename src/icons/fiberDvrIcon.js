import { initIcon } from "./icon.js";

//the url of the fiber dvr svg; resolved relative to this module
const URL_FIBERDVR = new URL('../../assets/icons/fiberDvr.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber dvr icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberDvr.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberDvrIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiberDvrIcon', url: URL_FIBERDVR }, ...properties);
}

/**
 * Creates a fiber dvr icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberDvrIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberDvrIcon(element, ...properties);
    return element;
}
