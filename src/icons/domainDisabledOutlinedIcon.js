import { initIcon } from "./icon.js";

//the url of the domain disabled outlined svg; resolved relative to this module
const URL_DOMAINDISABLEDOUTLINED = new URL('../../assets/icons/domainDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domainDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'domainDisabledOutlinedIcon', url: URL_DOMAINDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a domain disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainDisabledOutlinedIcon(element, ...properties);
    return element;
}
