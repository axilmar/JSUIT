import { initIcon } from "./icon.js";

//the url of the chevron left svg; resolved relative to this module
const URL_CHEVRONLEFT = new URL('../../assets/icons/chevronLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chevron left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chevronLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChevronLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chevronLeftIcon', url: URL_CHEVRONLEFT }, ...properties);
}

/**
 * Creates a chevron left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chevronLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initChevronLeftIcon(element, ...properties);
    return element;
}
