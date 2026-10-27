import { initIcon } from "./icon.js";

//the url of the hvac svg; resolved relative to this module
const URL_HVAC = new URL('../../assets/icons/hvac.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hvac icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hvac.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHvacIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hvacIcon', url: URL_HVAC }, ...properties);
}

/**
 * Creates a hvac icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hvacIcon = (...properties) => {
    const element = document.createElement('div');
    initHvacIcon(element, ...properties);
    return element;
}
