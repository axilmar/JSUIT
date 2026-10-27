import { initIcon } from "./icon.js";

//the url of the chevron right svg; resolved relative to this module
const URL_CHEVRONRIGHT = new URL('../../assets/icons/chevronRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chevron right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chevronRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChevronRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chevronRightIcon', url: URL_CHEVRONRIGHT }, ...properties);
}

/**
 * Creates a chevron right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chevronRightIcon = (...properties) => {
    const element = document.createElement('div');
    initChevronRightIcon(element, ...properties);
    return element;
}
