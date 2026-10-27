import { initIcon } from "./icon.js";

//the url of the fire extinguisher svg; resolved relative to this module
const URL_FIREEXTINGUISHER = new URL('../../assets/icons/fireExtinguisher.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fire extinguisher icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fireExtinguisher.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFireExtinguisherIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fireExtinguisherIcon', url: URL_FIREEXTINGUISHER }, ...properties);
}

/**
 * Creates a fire extinguisher icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fireExtinguisherIcon = (...properties) => {
    const element = document.createElement('div');
    initFireExtinguisherIcon(element, ...properties);
    return element;
}
