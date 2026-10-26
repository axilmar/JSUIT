import { initIcon } from "./icon.js";

//the url of the self improvement svg; resolved relative to this module
const URL_SELFIMPROVEMENT = new URL('../../assets/icons/selfImprovement.svg', import.meta.url).href;

/**
 * Initializes an icon element as a self improvement icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/selfImprovement.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSelfImprovementIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SELFIMPROVEMENT }, ...properties);
}

/**
 * Creates a self improvement icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const selfImprovementIcon = (...properties) => {
    const element = document.createElement('div');
    initSelfImprovementIcon(element, ...properties);
    return element;
}
