import { initIcon } from "./icon.js";

//the url of the subdirectory arrow right svg; resolved relative to this module
const URL_SUBDIRECTORYARROWRIGHT = new URL('../../assets/icons/subdirectoryArrowRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subdirectory arrow right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subdirectoryArrowRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubdirectoryArrowRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'subdirectoryArrowRightIcon', url: URL_SUBDIRECTORYARROWRIGHT }, ...properties);
}

/**
 * Creates a subdirectory arrow right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subdirectoryArrowRightIcon = (...properties) => {
    const element = document.createElement('div');
    initSubdirectoryArrowRightIcon(element, ...properties);
    return element;
}
