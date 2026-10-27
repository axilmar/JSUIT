import { initIcon } from "./icon.js";

//the url of the roundabout right svg; resolved relative to this module
const URL_ROUNDABOUTRIGHT = new URL('../../assets/icons/roundaboutRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roundabout right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roundaboutRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoundaboutRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roundaboutRightIcon', url: URL_ROUNDABOUTRIGHT }, ...properties);
}

/**
 * Creates a roundabout right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roundaboutRightIcon = (...properties) => {
    const element = document.createElement('div');
    initRoundaboutRightIcon(element, ...properties);
    return element;
}
