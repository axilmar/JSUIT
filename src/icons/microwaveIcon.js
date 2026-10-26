import { initIcon } from "./icon.js";

//the url of the microwave svg; resolved relative to this module
const URL_MICROWAVE = new URL('../../assets/icons/microwave.svg', import.meta.url).href;

/**
 * Initializes an icon element as a microwave icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/microwave.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicrowaveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICROWAVE }, ...properties);
}

/**
 * Creates a microwave icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const microwaveIcon = (...properties) => {
    const element = document.createElement('div');
    initMicrowaveIcon(element, ...properties);
    return element;
}
