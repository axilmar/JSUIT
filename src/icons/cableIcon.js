import { initIcon } from "./icon.js";

//the url of the cable svg; resolved relative to this module
const URL_CABLE = new URL('../../assets/icons/cable.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cable icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cable.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCableIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cableIcon', url: URL_CABLE }, ...properties);
}

/**
 * Creates a cable icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cableIcon = (...properties) => {
    const element = document.createElement('div');
    initCableIcon(element, ...properties);
    return element;
}
