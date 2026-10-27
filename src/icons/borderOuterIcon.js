import { initIcon } from "./icon.js";

//the url of the border outer svg; resolved relative to this module
const URL_BORDEROUTER = new URL('../../assets/icons/borderOuter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border outer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderOuter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderOuterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderOuterIcon', url: URL_BORDEROUTER }, ...properties);
}

/**
 * Creates a border outer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderOuterIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderOuterIcon(element, ...properties);
    return element;
}
