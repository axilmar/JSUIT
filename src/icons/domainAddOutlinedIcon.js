import { initIcon } from "./icon.js";

//the url of the domain add outlined svg; resolved relative to this module
const URL_DOMAINADDOUTLINED = new URL('../../assets/icons/domainAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a domain add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/domainAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDomainAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'domainAddOutlinedIcon', url: URL_DOMAINADDOUTLINED }, ...properties);
}

/**
 * Creates a domain add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const domainAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDomainAddOutlinedIcon(element, ...properties);
    return element;
}
