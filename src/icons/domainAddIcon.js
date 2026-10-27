import { initIcon } from "./icon.js";

//the url of the domain add svg; resolved relative to this module
const URL_DOMAINADD = new URL('../../assets/icons/domainAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domainAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'domainAddIcon', url: URL_DOMAINADD }, ...properties);
}

/**
 * Creates a domain add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainAddIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainAddIcon(element, ...properties);
    return element;
}
