import { initIcon } from "./icon.js";

//the url of the ramp right svg; resolved relative to this module
const URL_RAMPRIGHT = new URL('../../assets/icons/rampRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ramp right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rampRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRampRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAMPRIGHT }, ...properties);
}

/**
 * Creates a ramp right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rampRightIcon = (...properties) => {
    const element = document.createElement('div');
    initRampRightIcon(element, ...properties);
    return element;
}
