import { initIcon } from "./icon.js";

//the url of the three d rotation svg; resolved relative to this module
const URL_THREEDROTATION = new URL('../../assets/icons/threeDRotation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three d rotation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeDRotation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeDRotationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEDROTATION }, ...properties);
}

/**
 * Creates a three d rotation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeDRotationIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeDRotationIcon(element, ...properties);
    return element;
}
