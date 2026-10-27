import { initIcon } from "./icon.js";

//the url of the domain svg; resolved relative to this module
const URL_DOMAIN = new URL('../../assets/icons/domain.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domain.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'domainIcon', url: URL_DOMAIN }, ...properties);
}

/**
 * Creates a domain icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainIcon(element, ...properties);
    return element;
}
