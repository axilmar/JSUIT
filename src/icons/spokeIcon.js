import { initIcon } from "./icon.js";

//the url of the spoke svg; resolved relative to this module
const URL_SPOKE = new URL('../../assets/icons/spoke.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spoke icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spoke.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpokeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'spokeIcon', url: URL_SPOKE }, ...properties);
}

/**
 * Creates a spoke icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spokeIcon = (...properties) => {
    const element = document.createElement('div');
    initSpokeIcon(element, ...properties);
    return element;
}
