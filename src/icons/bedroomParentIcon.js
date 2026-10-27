import { initIcon } from "./icon.js";

//the url of the bedroom parent svg; resolved relative to this module
const URL_BEDROOMPARENT = new URL('../../assets/icons/bedroomParent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedroom parent icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedroomParent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedroomParentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bedroomParentIcon', url: URL_BEDROOMPARENT }, ...properties);
}

/**
 * Creates a bedroom parent icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedroomParentIcon = (...properties) => {
    const element = document.createElement('div');
    initBedroomParentIcon(element, ...properties);
    return element;
}
