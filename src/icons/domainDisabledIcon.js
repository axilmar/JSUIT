import { initIcon } from "./icon.js";

//the url of the domain disabled svg; resolved relative to this module
const URL_DOMAINDISABLED = new URL('../../assets/icons/domainDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domainDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOMAINDISABLED }, ...properties);
}

/**
 * Creates a domain disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainDisabledIcon(element, ...properties);
    return element;
}
