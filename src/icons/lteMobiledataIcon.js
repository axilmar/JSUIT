import { initIcon } from "./icon.js";

//the url of the lte mobiledata svg; resolved relative to this module
const URL_LTEMOBILEDATA = new URL('../../assets/icons/lteMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lte mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lteMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLteMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lteMobiledataIcon', url: URL_LTEMOBILEDATA }, ...properties);
}

/**
 * Creates a lte mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lteMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initLteMobiledataIcon(element, ...properties);
    return element;
}
