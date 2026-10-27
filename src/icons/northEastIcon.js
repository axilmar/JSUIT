import { initIcon } from "./icon.js";

//the url of the north east svg; resolved relative to this module
const URL_NORTHEAST = new URL('../../assets/icons/northEast.svg', import.meta.url).href;

/**
 * Initializes an icon element as a north east icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/northEast.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNorthEastIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'northEastIcon', url: URL_NORTHEAST }, ...properties);
}

/**
 * Creates a north east icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const northEastIcon = (...properties) => {
    const element = document.createElement('div');
    initNorthEastIcon(element, ...properties);
    return element;
}
