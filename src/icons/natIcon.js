import { initIcon } from "./icon.js";

//the url of the nat svg; resolved relative to this module
const URL_NAT = new URL('../../assets/icons/nat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'natIcon', url: URL_NAT }, ...properties);
}

/**
 * Creates a nat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const natIcon = (...properties) => {
    const element = document.createElement('div');
    initNatIcon(element, ...properties);
    return element;
}
