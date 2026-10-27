import { initIcon } from "./icon.js";

//the url of the align horizontal left svg; resolved relative to this module
const URL_ALIGNHORIZONTALLEFT = new URL('../../assets/icons/alignHorizontalLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align horizontal left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignHorizontalLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignHorizontalLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'alignHorizontalLeftIcon', url: URL_ALIGNHORIZONTALLEFT }, ...properties);
}

/**
 * Creates an align horizontal left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignHorizontalLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignHorizontalLeftIcon(element, ...properties);
    return element;
}
