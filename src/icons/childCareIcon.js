import { initIcon } from "./icon.js";

//the url of the child care svg; resolved relative to this module
const URL_CHILDCARE = new URL('../../assets/icons/childCare.svg', import.meta.url).href;

/**
 * Initializes an icon element as a child care icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/childCare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChildCareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'childCareIcon', url: URL_CHILDCARE }, ...properties);
}

/**
 * Creates a child care icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const childCareIcon = (...properties) => {
    const element = document.createElement('div');
    initChildCareIcon(element, ...properties);
    return element;
}
