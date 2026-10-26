import { initIcon } from "./icon.js";

//the url of the domain outlined svg; resolved relative to this module
const URL_DOMAINOUTLINED = new URL('../../assets/icons/domainOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domainOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOMAINOUTLINED }, ...properties);
}

/**
 * Creates a domain outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainOutlinedIcon(element, ...properties);
    return element;
}
