import { initIcon } from "./icon.js";

//the url of the scale svg; resolved relative to this module
const URL_SCALE = new URL('../../assets/icons/scale.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scale icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scale.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScaleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCALE }, ...properties);
}

/**
 * Creates a scale icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scaleIcon = (...properties) => {
    const element = document.createElement('div');
    initScaleIcon(element, ...properties);
    return element;
}
